from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630

# Brand gradient: #00b4ff → #8b5cf6 → #d946ef (135deg, top-left to bottom-right)
c1 = (0, 180, 255)
c2 = (139, 92, 246)
c3 = (217, 70, 239)

def lerp_color(a, b, t):
    return tuple(int(a[i] + t * (b[i] - a[i])) for i in range(3))

# Build gradient row by row
img = Image.new('RGB', (W, H))
pixels = []
for y in range(H):
    row = []
    for x in range(W):
        t = (x / W + y / H) / 2  # 0→1 diagonal
        if t < 0.5:
            color = lerp_color(c1, c2, t * 2)
        else:
            color = lerp_color(c2, c3, (t - 0.5) * 2)
        row.append(color)
    pixels.extend(row)
img.putdata(pixels)

# Overlay a subtle dark vignette toward edges for depth
draw = ImageDraw.Draw(img, 'RGBA')
for i in range(60):
    alpha = int(80 * (i / 60))
    draw.rectangle([i, i, W - i - 1, H - i - 1], outline=(0, 0, 0, 0))

# Load and paste the icon — white symbol, scaled to ~200px
icon_path = os.path.join(os.path.dirname(__file__), 'images', 'durand-icon.png')
icon = Image.open(icon_path).convert('RGBA')
icon_size = 300
icon = icon.resize((icon_size, icon_size), Image.LANCZOS)

font_path = os.path.expanduser('~/Library/Fonts/Gotham-Bold.otf')
text = "The Durand Clinic"
max_text_w = W - 340  # ~170px padding each side → smaller font

# Auto-fit: start at 130px, shrink until text fits
size = 130
font = ImageFont.truetype(font_path, size)
dummy = ImageDraw.Draw(img)
while size > 40:
    bbox = dummy.textbbox((0, 0), text, font=font)
    if (bbox[2] - bbox[0]) <= max_text_w:
        break
    size -= 2
    font = ImageFont.truetype(font_path, size)

icon_y = 70
icon_x = (W - icon_size) // 2
img.paste(icon, (icon_x, icon_y), icon)

draw2 = ImageDraw.Draw(img)
bbox = draw2.textbbox((0, 0), text, font=font)
text_w = bbox[2] - bbox[0]
text_h = bbox[3] - bbox[1]
text_x = (W - text_w) // 2
text_y = icon_y + icon_size + 12

draw2.text((text_x, text_y), text, fill=(255, 255, 255), font=font)

# Save
out = os.path.join(os.path.dirname(__file__), 'images', 'home-og.jpg')
img.convert('RGB').save(out, 'JPEG', quality=92)
print(f"Saved {out} ({W}x{H})")

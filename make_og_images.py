from PIL import Image
import os

W, H = 1200, 630

def center_crop(src, out):
    img = Image.open(src).convert('RGB')
    iw, ih = img.size
    # scale so the short side fills the target dimension
    scale = max(W / iw, H / ih)
    new_w = round(iw * scale)
    new_h = round(ih * scale)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - W) // 2
    top  = (new_h - H) // 2
    img = img.crop((left, top, left + W, top + H))
    img.save(out, 'JPEG', quality=92)
    print(f'Saved {out}')

base = os.path.dirname(__file__)
img  = lambda f: os.path.join(base, 'images', f)

crops = [
    (img('scientists-monitors.png'),        img('about-og.jpg')),
    (img('hospitals.jpg'),                  img('enquiry-og.jpg')),
    (img('doctor-tablet.png'),              img('faq-og.jpg')),
    (img('dna-commitment.jpg'),             img('founder-message-og.jpg')),
    (img('scientists-curved-monitor.png'),  img('insights-og.jpg')),
    (img('futuristic-cityscape.png'),       img('partners-og.jpg')),
    (img('health-assessment.jpg'),          img('pricing-og.jpg')),
    (img('health-intelligence-monitor.png'),img('services-og.jpg')),
    (img('data-burst.png'),                 img('biological-age-og.jpg')),
]

for src, out in crops:
    center_crop(src, out)

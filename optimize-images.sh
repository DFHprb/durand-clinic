#!/bin/bash
# ============================================
#  Durand Clinic — Image Optimizer
#  Uses sips (built-in macOS), no installs needed
#
#  Portrait photos  → max 400px longest side
#  Scene/hero photos → max 1400px longest side
#  JPEGs            → quality 80
# ============================================

IMAGES_DIR="$(dirname "$0")/images"

# Portrait photos: matched by filename keywords (people's names)
PORTRAIT_PATTERN="hall|shen|bolos|guo|fediurek|copland|barnim|kipp|marryum|divincenzo|poplawski|nithya|pschibul|duong|ashley|spring|josef|nigel|aaron|rebecca|ola"

PORTRAIT_MAX=400
SCENE_MAX=1400

total_before=0
total_after=0
count=0

echo ""
echo "Optimizing images in: $IMAGES_DIR"
echo "--------------------------------------------"

for file in "$IMAGES_DIR"/*.jpg "$IMAGES_DIR"/*.png; do
  [ -f "$file" ] || continue

  filename=$(basename "$file")
  ext="${filename##*.}"
  name_lower=$(echo "${filename%.*}" | tr '[:upper:]' '[:lower:]')

  # Determine portrait vs scene
  if echo "$name_lower" | grep -qE "$PORTRAIT_PATTERN"; then
    max=$PORTRAIT_MAX
    label="portrait"
  else
    max=$SCENE_MAX
    label="scene  "
  fi

  # Get current dimensions
  width=$(sips -g pixelWidth "$file" 2>/dev/null | awk '/pixelWidth/{print $2}')
  height=$(sips -g pixelHeight "$file" 2>/dev/null | awk '/pixelHeight/{print $2}')
  [ -z "$width" ] && continue

  longest=$(( width > height ? width : height ))
  before=$(stat -f%z "$file")
  total_before=$(( total_before + before ))

  # Work on a temp copy so we can discard if result is larger
  tmp="${file}.tmp"
  cp "$file" "$tmp"

  resized=false
  if [ "$longest" -gt "$max" ]; then
    sips -Z $max "$tmp" --out "$tmp" > /dev/null 2>&1
    resized=true
  fi

  # Set JPEG quality
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  if [[ "$ext_lower" == "jpg" ]]; then
    sips -s formatOptions 80 "$tmp" --out "$tmp" > /dev/null 2>&1
  fi

  after=$(stat -f%z "$tmp")

  # Only keep the result if it's actually smaller
  if [ "$after" -lt "$before" ]; then
    mv "$tmp" "$file"
  else
    rm "$tmp"
    after=$before
  fi
  total_after=$(( total_after + after ))
  count=$(( count + 1 ))

  before_kb=$(( before / 1024 ))
  after_kb=$(( after / 1024 ))
  saving=$(( before_kb - after_kb ))

  if [ "$resized" = true ]; then
    new_w=$(sips -g pixelWidth "$file" 2>/dev/null | awk '/pixelWidth/{print $2}')
    new_h=$(sips -g pixelHeight "$file" 2>/dev/null | awk '/pixelHeight/{print $2}')
    echo "[$label] $filename"
    echo "         ${width}x${height} → ${new_w}x${new_h} | ${before_kb}KB → ${after_kb}KB (saved ${saving}KB)"
  else
    echo "[$label] $filename — already optimized (${after_kb}KB)"
  fi
done

echo "--------------------------------------------"
total_before_kb=$(( total_before / 1024 ))
total_after_kb=$(( total_after / 1024 ))
total_saving=$(( total_before_kb - total_after_kb ))
echo "Total: ${total_before_kb}KB → ${total_after_kb}KB — saved ${total_saving}KB across $count images"
echo ""

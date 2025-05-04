from PIL import Image
import os

def create_rectangular_tiles(input_path, output_dir, chunk_width=1920, chunk_height=1080):
    """Create rectangular tiles from a large image"""
    os.makedirs(output_dir, exist_ok=True)
    
    # Bypass decompression bomb warning
    Image.MAX_IMAGE_PIXELS = None
    
    img = Image.open(input_path)
    width, height = img.size
    
    # Calculate number of chunks
    cols = (width + chunk_width - 1) // chunk_width
    rows = (height + chunk_height - 1) // chunk_height
    
    for row in range(rows):
        for col in range(cols):
            left = col * chunk_width
            upper = row * chunk_height
            right = min(left + chunk_width, width)
            lower = min(upper + chunk_height, height)
            
            chunk = img.crop((left, upper, right, lower))
            chunk.save(f"{output_dir}/chunk_{row}_{col}.png")
            
    print(f"Created {cols*rows} chunks ({chunk_width}x{chunk_height})")

# Usage
create_rectangular_tiles("tileset.png", "map_chunks")
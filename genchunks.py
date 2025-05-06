import os
from PIL import Image
import argparse

def split_tile(input_path, output_dir, row, col, split_factor=4):
    """
    Split a single tile into multiple smaller tiles with Leaflet-compatible naming
    """
    try:
        with Image.open(input_path) as img:
            width, height = img.size
            
            # Calculate how many tiles we'll create in each dimension
            tiles_per_side = split_factor
            tile_width = width // tiles_per_side
            tile_height = height // tiles_per_side
            
            for i in range(tiles_per_side):
                for j in range(tiles_per_side):
                    left = j * tile_width
                    upper = i * tile_height
                    right = left + tile_width
                    lower = upper + tile_height
                    
                    cropped = img.crop((left, upper, right, lower))
                    
                    # Calculate new row and column numbers
                    new_row = row * split_factor + i
                    new_col = col * split_factor + j
                    
                    output_path = os.path.join(
                        output_dir, 
                        f"chunk_{new_row}_{new_col}.png"
                    )
                    cropped.save(output_path)
                    
    except Exception as e:
        print(f"Error processing {input_path}: {str(e)}")

def process_tiles(input_dir, output_dir, split_factor=4):
    """
    Process all tiles in the input directory and split them with proper Leaflet naming
    """
    if not os.path.exists(input_dir):
        print(f"Input directory {input_dir} does not exist")
        return
    
    os.makedirs(output_dir, exist_ok=True)
    
    # Find all chunk files and extract their coordinates
    tile_files = []
    for f in os.listdir(input_dir):
        if f.lower().endswith(('.png', '.jpg', '.jpeg')):
            try:
                if f.startswith('chunk_'):
                    parts = f.split('_')
                    row = int(parts[1])
                    col = int(parts[2].split('.')[0])
                    tile_files.append((f, row, col))
            except:
                print(f"Warning: Couldn't parse coordinates from {f} - skipping")
                continue
    
    print(f"Found {len(tile_files)} tiles to process")
    
    for tile_file, row, col in tile_files:
        input_path = os.path.join(input_dir, tile_file)
        split_tile(input_path, output_dir, row, col, split_factor)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Split map tiles into smaller subtiles for Leaflet")
    parser.add_argument("input_dir", help="Directory containing the original chunks (chunk_row_col.png)")
    parser.add_argument("output_dir", help="Directory to save the split chunks")
    parser.add_argument("--split", type=int, default=2, 
                        help="Split factor (2=split into 4 tiles, 3=split into 9 tiles, etc.)")
    
    args = parser.parse_args()
    
    print(f"Splitting {args.split}x{args.split} chunks from {args.input_dir}")
    print(f"Output will be saved to {args.output_dir}")
    
    process_tiles(args.input_dir, args.output_dir, args.split)
    
    # Count how many new tiles were created
    new_tile_count = len([f for f in os.listdir(args.output_dir) if f.startswith('chunk_')])
    print(f"Tile splitting complete! Created {new_tile_count} new chunks")

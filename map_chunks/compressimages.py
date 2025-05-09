from PIL import Image
import os

input_folder = "D:\\animalwellmap\\old_map_chunks"
output_folder = "D:\\animalwellmap\\map_chunks_2x2"

# Create output directory if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

def downscale_to_2x2(input_path, output_path):
    try:
        img = Image.open(input_path)
        pixels = img.load()
        
        # Calculate new dimensions (each 6x6 block becomes 2x2)
        new_width = (img.width // 6) * 2
        new_height = (img.height // 6) * 2
        new_img = Image.new("RGB", (new_width, new_height))
        new_pixels = new_img.load()
        
        # For each 6x6 block in original image
        for block_x in range(0, img.width, 6):
            for block_y in range(0, img.height, 6):
                # Get the top-left color of the 6x6 block
                color = pixels[block_x, block_y]
                
                # Calculate position in new image (each block becomes 2x2)
                new_block_x = (block_x // 6) * 2
                new_block_y = (block_y // 6) * 2
                
                # Fill 2x2 pixels with the same color
                for x_offset in range(2):
                    for y_offset in range(2):
                        new_pixels[new_block_x + x_offset, new_block_y + y_offset] = color
        
        new_img.save(output_path)
        print(f"Successfully processed: {input_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {str(e)}")

# Process all PNG files in input folder
for filename in os.listdir(input_folder):
    if filename.lower().endswith(".png"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)
        downscale_to_2x2(input_path, output_path)
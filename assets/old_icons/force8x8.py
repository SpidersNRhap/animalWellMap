import os
from PIL import Image

def process_images_with_scaling(input_folder, output_folder):
    """
    Process all images in a folder:
    - 16x16 images: scale directly to 32x32 with pixel duplication
    - Other sizes: force to 8x8 with transparency, then scale to 32x32
    
    Args:
        input_folder (str): Path to folder containing original images
        output_folder (str): Path to folder where processed images will be saved
    """
    
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # Process each image in the input folder
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
            try:
                # Open the image and convert to RGBA to support transparency
                img_path = os.path.join(input_folder, filename)
                img = Image.open(img_path).convert('RGBA')
                width, height = img.size
                
                # Special case: if image is exactly 16x16
                if width == 16 and height == 16:
                    # Scale directly to 32x32 with pixel duplication
                    large_img = img.resize((32, 32), Image.NEAREST)
                else:
                    # For all other sizes: force to 8x8 first
                    new_img = Image.new('RGBA', (8, 8), (0, 0, 0, 0))
                    paste_x = max(0, (8 - width) // 2)
                    paste_y = max(0, (8 - height) // 2)
                    new_img.paste(img, (paste_x, paste_y))
                    # Then scale to 32x32
                    large_img = new_img.resize((32, 32), Image.NEAREST)
                
                # Save as PNG to preserve transparency
                output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + '.png')
                large_img.save(output_path)
                
                print(f"Processed {width}x{height} image: {filename} -> 32x32")
                
            except Exception as e:
                print(f"Error processing {filename}: {str(e)}")

# Example usage:
# process_images_with_scaling('input_images', 'output_images')
# Example usage:
process_images_with_scaling('D:\\animalwellmap\\assets\\old_icons', 'D:\\animalwellmap\\assets\\icons')
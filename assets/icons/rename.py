import os
import re

def rename_egg_files(directory='.'):
    """
    Renames files from 'egg-<name>.png' format to '<name> egg.png' format.
    """
    pattern = re.compile(r'egg-(.+)\.png', re.IGNORECASE)
    
    renamed_count = 0
    
    for filename in os.listdir(directory):
        match = pattern.fullmatch(filename)
        if match:
            name = match.group(1)
            new_name = f"{name} Egg.png"
            old_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_name)
            
            try:
                os.rename(old_path, new_path)
                print(f"Renamed: '{filename}' -> '{new_name}'")
                renamed_count += 1
            except OSError as e:
                print(f"Error renaming '{filename}': {e}")
    
    if renamed_count == 0:
        print("No matching files found. Looking for files named 'egg-<name>.png'")

if __name__ == "__main__":
    target_directory = input("Enter directory path (or press Enter for current directory): ").strip()
    if not target_directory:
        target_directory = '.'
    
    if not os.path.isdir(target_directory):
        print(f"Error: Directory '{target_directory}' does not exist")
    else:
        print(f"Processing files in: {os.path.abspath(target_directory)}")
        rename_egg_files(target_directory)
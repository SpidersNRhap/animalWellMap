import os

directory = r"D:\animalwellmap\assets\icons"
output = []

for filename in os.listdir(directory):
    if os.path.isfile(os.path.join(directory, filename)) and "egg" in filename.lower():
        name_without_ext = os.path.splitext(filename)[0]
        output.append(f'"{name_without_ext}": {{icon: "assets/icons/{name_without_ext}.png"}},')

print("\n".join(output))
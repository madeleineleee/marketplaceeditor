#!/bin/bash

for file in *.mov; do
    base_name=$(basename "$file" .mov)

    ffmpeg -i "$file" -vf "scale=256:256,fps=12,format=rgba,split[a][b];[a]drawbox=color=#FFFFFF:t=fill[bg];[bg][b]overlay" -y "${base_name}_temp_with_light_bg.mov"
    ffmpeg -i "${base_name}_temp_with_light_bg.mov" -vf "palettegen" -y "${base_name}_palette.png"
    ffmpeg -i "${base_name}_temp_with_light_bg.mov" -i "${base_name}_palette.png" -filter_complex "[0:v][1:v]paletteuse=dither=none" -y "${base_name}-light.gif"
    rm "${base_name}_temp_with_light_bg.mov" "${base_name}_palette.png"

    ffmpeg -i "$file" -vf "scale=256:256,fps=12,format=rgba,split[a][b];[a]drawbox=color=#D3D3D3:t=fill[bg];[bg][b]overlay" -y "${base_name}_temp_with_dark_bg.mov"
    ffmpeg -i "${base_name}_temp_with_dark_bg.mov" -vf "palettegen" -y "${base_name}_palette.png"
    ffmpeg -i "${base_name}_temp_with_dark_bg.mov" -i "${base_name}_palette.png" -filter_complex "[0:v][1:v]paletteuse=dither=none" -y "${base_name}-dark.gif"
    rm "${base_name}_temp_with_dark_bg.mov" "${base_name}_palette.png"
done

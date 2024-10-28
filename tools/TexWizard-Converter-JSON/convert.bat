@echo off
setlocal enabledelayedexpansion

:: Set the folder path
set "folder_path=C:\Games\CX360"
set "output_file=C:\Games\CX360\output.txt"

:: Start the JSON structure
echo [ > "%output_file%"

:: Loop through all files in the folder and count the total number of files
set "file_count=0"
for %%f in ("%folder_path%\*.*") do (
    set /a file_count+=1
)

:: Loop through all files again and add them to the output
set "current_index=0"
for %%f in ("%folder_path%\*.*") do (
    set /a current_index+=1

    :: Get the base name without extension and suffixes
    set "base_name=%%~nf"
    set "base_name=!base_name:_D=!"
    set "base_name=!base_name:_R=!"
    set "base_name=!base_name:_N=!"

    if !current_index! lss !file_count! (
        echo     [ "!base_name!", "%%~nxf" ], >> "%output_file%"
    ) else (
        echo     [ "!base_name!", "%%~nxf" ] >> "%output_file%"
    )
)

:: Close the JSON structure
echo ] >> "%output_file%"

echo File list has been generated in "%output_file%"
pause

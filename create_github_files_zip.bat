@echo off
title Creating Zip Archive of All Missing Project Files
cd /d "%~dp0"

echo ===================================================
echo   Creating Clean Zip for GitHub Upload
echo   Destination: %USERPROFILE%\Downloads\dawat_mukerian_complete_project.zip
echo ===================================================
echo.

tar.exe -a -cf "%USERPROFILE%\Downloads\dawat_mukerian_complete_project.zip" --exclude=node_modules --exclude=.tanstack --exclude=.git src public package.json bun.lock tsconfig.json vite.config.ts components.json run.bat README.md upload_to_github.bat push_all_files.bat

if exist "%USERPROFILE%\Downloads\dawat_mukerian_complete_project.zip" goto success

powershell -NoProfile -Command "Compress-Archive -Path src, public, package.json, bun.lock, tsconfig.json, vite.config.ts, components.json, run.bat, README.md, upload_to_github.bat, push_all_files.bat -DestinationPath '%USERPROFILE%\Downloads\dawat_mukerian_complete_project.zip' -Force"

if exist "%USERPROFILE%\Downloads\dawat_mukerian_complete_project.zip" goto success

echo [ERROR] Could not create zip archive automatically.
pause
exit /b 1

:success
echo.
echo ===================================================
echo  [SUCCESS] All files including 'src' folder zipped!
echo  Location: %USERPROFILE%\Downloads\dawat_mukerian_complete_project.zip
echo ===================================================
echo.
pause

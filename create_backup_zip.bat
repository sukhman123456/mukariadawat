@echo off
title Creating Dawat Restaurant Backup
cd /d "%~dp0"

echo ===================================================
echo   Creating Clean Backup Archive
echo   Destination: C:\Users\hp\Downloads\dawat_restaurant_latest_backup.zip
echo ===================================================
echo.

tar.exe -a -cf "C:\Users\hp\Downloads\dawat_restaurant_latest_backup.zip" --exclude=node_modules --exclude=.tanstack src public package.json bun.lock tsconfig.json vite.config.ts components.json run.bat README.md

if exist "C:\Users\hp\Downloads\dawat_restaurant_latest_backup.zip" goto success

powershell -NoProfile -Command "Compress-Archive -Path src, public, package.json, bun.lock, tsconfig.json, vite.config.ts, components.json, run.bat, README.md -DestinationPath 'C:\Users\hp\Downloads\dawat_restaurant_latest_backup.zip' -Force"

if exist "C:\Users\hp\Downloads\dawat_restaurant_latest_backup.zip" goto success

echo [ERROR] Failed to create backup zip.
goto end

:success
echo.
echo ===================================================
echo  [SUCCESS] Backup archive created successfully!
echo.
echo  Saved to:
echo  C:\Users\hp\Downloads\dawat_restaurant_latest_backup.zip
echo ===================================================

:end
echo.
pause

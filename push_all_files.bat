@echo off
title Push All Files to GitHub
cd /d "%~dp0"
call upload_to_github.bat
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] An error occurred while uploading.
)
echo.
pause

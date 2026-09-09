@echo off
title Upload Dawat Restaurant to GitHub
cd /d "%~dp0"
setlocal enabledelayedexpansion

echo ===================================================================
echo     Dawat Restaurant - Automatic GitHub Upload Tool
echo     Target: https://github.com/sukhman123456/dawatrestarent
echo ===================================================================
echo.

:: 1. Look for git.exe
set "GIT_CMD="
where git >nul 2>nul && set "GIT_CMD=git"

if not defined GIT_CMD (
    if exist "C:\Program Files\Git\cmd\git.exe" set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
)
if not defined GIT_CMD (
    if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" set "GIT_CMD=%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
)
if not defined GIT_CMD (
    if exist "C:\Program Files (x86)\Git\cmd\git.exe" set "GIT_CMD=C:\Program Files (x86)\Git\cmd\git.exe"
)

:: If Git is still not found, try installing it automatically via winget
if not defined GIT_CMD (
    echo [INFO] Git was not found. Attempting automatic installation via Windows Package Manager...
    where winget >nul 2>nul
    if %errorlevel% equ 0 (
        echo Downloading and installing Git in background, please wait 30 seconds...
        winget install --id Git.Git -e --source winget --accept-source-agreements --accept-package-agreements --silent
        if exist "C:\Program Files\Git\cmd\git.exe" set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
        if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" set "GIT_CMD=%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
    )
)

if not defined GIT_CMD (
    echo.
    echo ===================================================================
    echo  [!] Git is not installed on this computer.
    echo ===================================================================
    echo  Without Git, files cannot be sent to GitHub from the terminal.
    echo.
    echo  Quick 1-minute Solution:
    echo  1. Open this link: https://git-scm.com/download/win
    echo  2. Click "64-bit Git for Windows Setup" to download.
    echo  3. Run the installer (just click Next, Next, Finish).
    echo  4. Then double-click this upload_to_github.bat file again!
    echo ===================================================================
    echo.
    pause
    exit /b 1
)

echo [OK] Git is ready: "%GIT_CMD%"
echo.

:: Step 1: Initialize Git repo if needed
if not exist ".git" (
    echo Step 1: Initializing local repository...
    "%GIT_CMD%" init
)

:: Step 2: Configure Git identity if not set
"%GIT_CMD%" config user.email >nul 2>nul
if %errorlevel% neq 0 (
    "%GIT_CMD%" config user.name "Sukhman"
    "%GIT_CMD%" config user.email "sukhman@dawatrestaurant.com"
)

:: Step 3: Configure remote repository
echo Step 2: Connecting to GitHub repository...
"%GIT_CMD%" remote remove origin >nul 2>nul
"%GIT_CMD%" remote add origin https://github.com/sukhman123456/dawatrestarent.git

:: Step 4: Stage files
echo Step 3: Staging files (Bar menu, real photos, animations)...
"%GIT_CMD%" add .

:: Step 5: Commit
echo Step 4: Creating commit...
"%GIT_CMD%" commit -m "Upload complete Dawat Restaurant with Bar Drinks Menu, real photos, and animations" >nul 2>nul

:: Step 6: Push to GitHub
echo.
echo Step 5: Uploading files to https://github.com/sukhman123456/dawatrestarent...
echo [NOTE] If a GitHub login window appears in your browser, please click "Sign In" or "Authorize".
echo.

"%GIT_CMD%" branch -M main
"%GIT_CMD%" push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [INFO] Syncing with existing GitHub files...
    "%GIT_CMD%" pull origin main --allow-unrelated-histories --no-rebase -m "Merge existing files"
    "%GIT_CMD%" push -u origin main
)

echo.
echo ===================================================================
if %errorlevel% equ 0 (
    echo   CONGRATULATIONS! ALL FILES SUCCESSFULLY UPLOADED TO GITHUB!
    echo   Visit: https://github.com/sukhman123456/dawatrestarent
) else (
    echo   Upload completed with warnings. Please check GitHub.
)
echo ===================================================================
echo.
pause

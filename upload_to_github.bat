@echo off
title Upload Dawat Restaurant Files to GitHub
cd /d "%~dp0"

echo ===================================================================
echo     Dawat Restaurant - Automatic GitHub Upload Tool
echo     Target: https://github.com/sukhman123456/mukariadawat
echo ===================================================================
echo.

set "GIT_CMD="

:: Check PATH first
where git >nul 2>nul
if %errorlevel% equ 0 (
    set "GIT_CMD=git"
    goto git_found
)

:: Check common Git locations
if exist "C:\Program Files\Git\cmd\git.exe" (
    set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
    goto git_found
)
if exist "C:\Program Files\Git\bin\git.exe" (
    set "GIT_CMD=C:\Program Files\Git\bin\git.exe"
    goto git_found
)
if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" (
    set "GIT_CMD=%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
    goto git_found
)
if exist "%LOCALAPPDATA%\Programs\Git\bin\git.exe" (
    set "GIT_CMD=%LOCALAPPDATA%\Programs\Git\bin\git.exe"
    goto git_found
)
if exist "C:\Program Files (x86)\Git\cmd\git.exe" (
    set "GIT_CMD=C:\Program Files (x86)\Git\cmd\git.exe"
    goto git_found
)
if exist "C:\ProgramData\chocolatey\bin\git.exe" (
    set "GIT_CMD=C:\ProgramData\chocolatey\bin\git.exe"
    goto git_found
)

:: Try installing via winget if not found
echo [INFO] Git was not detected. Attempting to install Git via winget...
where winget >nul 2>nul
if %errorlevel% neq 0 goto git_not_found

winget install --id Git.Git -e --source winget --accept-source-agreements --accept-package-agreements --silent
if exist "C:\Program Files\Git\cmd\git.exe" (
    set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
    goto git_found
)
if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" (
    set "GIT_CMD=%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
    goto git_found
)

:git_not_found
echo.
echo ===================================================================
echo  [!] Git is not installed on your system.
echo ===================================================================
echo  Please download and install Git (takes 1 minute):
echo  https://git-scm.com/download/win
echo ===================================================================
echo.
pause
exit /b 1

:git_found
echo [OK] Using Git: "%GIT_CMD%"
echo.

:: Initialize if needed
if not exist ".git" (
    echo Step 1: Initializing git repository...
    "%GIT_CMD%" init
)

:: Set user identity
"%GIT_CMD%" config user.name "Sukhman"
"%GIT_CMD%" config user.email "sukhman@dawatrestaurant.com"

:: Set remote
echo Step 2: Setting remote origin...
"%GIT_CMD%" remote remove origin >nul 2>nul
"%GIT_CMD%" remote add origin https://github.com/sukhman123456/mukariadawat.git
"%GIT_CMD%" branch -M main

:: Sync remote
echo Step 3: Fetching existing files from GitHub...
"%GIT_CMD%" fetch origin main >nul 2>nul
"%GIT_CMD%" pull origin main --allow-unrelated-histories --no-rebase -m "Merge existing GitHub files" >nul 2>nul

:: Stage all files
echo Step 4: Staging all files including src and public...
"%GIT_CMD%" add -A

:: Commit
echo Step 5: Creating commit...
"%GIT_CMD%" commit -m "Upload complete Dawat Restaurant project with src, routes, components and assets"

:: Push
echo.
echo Step 6: Uploading to GitHub (https://github.com/sukhman123456/mukariadawat)...
"%GIT_CMD%" push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [INFO] Retrying push with branch sync...
    "%GIT_CMD%" pull origin main --allow-unrelated-histories --no-rebase -m "Merge"
    "%GIT_CMD%" push -u origin main
)

echo.
echo ===================================================================
echo  Upload process finished. Check your repository:
echo  https://github.com/sukhman123456/mukariadawat
echo ===================================================================
echo.
pause

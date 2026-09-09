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
if exist "%LOCALAPPDATA%\MinGit\cmd\git.exe" (
    set "GIT_CMD=%LOCALAPPDATA%\MinGit\cmd\git.exe"
    goto git_found
)
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

:: Set up portable MinGit if not installed (requires no administrator rights)
echo [INFO] Git was not detected on your system.
echo [INFO] Downloading lightweight portable Git (no admin rights needed)...
if not exist "%LOCALAPPDATA%\MinGit" mkdir "%LOCALAPPDATA%\MinGit"

curl.exe -L -o "%TEMP%\mingit.zip" "https://github.com/git-for-windows/git/releases/download/v2.48.1.windows.1/MinGit-2.48.1-64-bit.zip"
if %errorlevel% equ 0 (
    echo [INFO] Extracting portable Git...
    tar.exe -xf "%TEMP%\mingit.zip" -C "%LOCALAPPDATA%\MinGit"
    del "%TEMP%\mingit.zip" >nul 2>nul
)

if exist "%LOCALAPPDATA%\MinGit\cmd\git.exe" (
    set "GIT_CMD=%LOCALAPPDATA%\MinGit\cmd\git.exe"
    goto git_found
)

:git_not_found
echo.
echo ===================================================================
echo  [!] Could not set up Git automatically.
echo  Please download and install Git from: https://git-scm.com/download/win
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
echo Step 2: Configuring GitHub repository remote...
"%GIT_CMD%" remote remove origin >nul 2>nul
"%GIT_CMD%" remote add origin https://github.com/sukhman123456/mukariadawat.git
"%GIT_CMD%" branch -M main

:: Stage all files first
echo Step 3: Staging all files including src, public, and project assets...
"%GIT_CMD%" add -A

:: Commit
echo Step 4: Creating commit with all project files...
"%GIT_CMD%" commit -m "Upload complete Dawat Restaurant project with src, routes, components and assets"

:: Fetch and sync remote
echo Step 5: Syncing with existing GitHub files...
"%GIT_CMD%" fetch origin main >nul 2>nul
"%GIT_CMD%" merge origin/main --allow-unrelated-histories -X ours -m "Merge existing GitHub files" >nul 2>nul

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
echo  Upload process finished!
echo  Check your repository: https://github.com/sukhman123456/mukariadawat
echo ===================================================================
echo.
pause


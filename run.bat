@echo off
title Dawat Restaurant - Local Dev Server
cd /d "%~dp0"
echo ===================================================
echo   Installing dependencies & Starting Local Server
echo ===================================================
echo.
"%USERPROFILE%\.bun\bin\bun.exe" install
echo.
echo Starting development server on localhost...
"%USERPROFILE%\.bun\bin\bun.exe" run dev
pause

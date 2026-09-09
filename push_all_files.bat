@echo off
title Push All Files to GitHub
cd /d "%~dp0"
call upload_to_github.bat

@echo off
cd /d "%~dp0"
echo Starting development server...
echo.
echo Path: %CD%
echo.
npx vite --host 0.0.0.0 --port 3000
pause

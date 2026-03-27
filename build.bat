@echo off
cd /d "y:\y0ussefmahmoud\Work\In Progress\Abdulaziz Alablam Advocates & Legal Consultants V1.0.0\Abdulaziz Alablam Advocates & Legal Consultants"

echo Installing dependencies...
call npm install

echo Building project...
call npm run build

echo Build completed!
pause

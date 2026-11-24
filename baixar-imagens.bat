@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist assets\img mkdir assets\img
powershell -NoProfile -Command "Invoke-WebRequest -UseBasicParsing 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=85' -OutFile 'assets\img\negocios.jpg'" && echo ok negocios.jpg
powershell -NoProfile -Command "Invoke-WebRequest -UseBasicParsing 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85' -OutFile 'assets\img\evolui.jpg'" && echo ok evolui.jpg
powershell -NoProfile -Command "Invoke-WebRequest -UseBasicParsing 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85' -OutFile 'assets\img\impulso.jpg'" && echo ok impulso.jpg
powershell -NoProfile -Command "Invoke-WebRequest -UseBasicParsing 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85' -OutFile 'assets\img\descoberta.jpg'" && echo ok descoberta.jpg
powershell -NoProfile -Command "Invoke-WebRequest -UseBasicParsing 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85' -OutFile 'assets\img\jovem.jpg'" && echo ok jovem.jpg
powershell -NoProfile -Command "Invoke-WebRequest -UseBasicParsing 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1100&q=85' -OutFile 'assets\img\inova.jpg'" && echo ok inova.jpg
echo.
echo Concluido. As imagens estao em assets\img
pause

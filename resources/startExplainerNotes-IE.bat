@ECHO OFF
call venv\Scripts\activate.bat
@ECHO Building distance data file...
start /min "" python ./init/initialize_json.py
@ECHO Starting Python HTTP Server on port 8888...
@ECHO .
start /min "" python -m http.server 8888
:: Sleep for 3 seconds
Timeout /T 3 /NoBreak>NUL
@ECHO Launching Explainer Notes...
Start "" "%ProgramFiles%\Internet Explorer\iexplore.exe" "http://localhost:8888/"

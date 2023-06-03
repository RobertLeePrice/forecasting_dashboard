@echo off

REM Specify the path to the activate.bat file
set "activate_script=venv\Scripts\activate.bat"

REM Check if the activate script exists
if exist "%activate_script%" (
    REM Run the activate script
    call "%activate_script%"

    REM Run the Django development server
    python manage.py runserver
) else (
    echo Error: activate script not found.
)

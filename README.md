# Earthquake Monitor System Application

## Description
The Earthquake Monitor System Application is designed to provide real-time monitoring and alerts for seismic activities. Developed as part of the Bachelor of Software Engineering program, this application integrates various tools and frameworks to deliver accurate and timely earthquake data.

# Requirement
- asgiref==3.7.2
- certifi==2023.7.22
- charset-normalizer==3.3.2
- Django==4.2.7
- django-cors-headers==4.3.1
- djangorestframework==3.14.0
- djangorestframework-gis==1.0
- idna==3.4
- psycopg2==2.9.9
- psycopg2-binary==2.9.9
- pyproj==3.6.1
- pytz==2023.3.post1
- requests==2.31.0
- sqlparse==0.4.4
- typing_extensions==4.8.0
- urllib3==2.0.7

## Features
- Real-time earthquake monitoring
- User-friendly interface
- GIS integration with GeoDjango framework with PostGIS
- Data management with Django REST framework with postgreSQL
- Front-end development with React JS

## Contribution
- **Thierry Gibbons:** Developer, UI/UX Designer
- **Naomi Murachi:** Data Management, GIS Specialist

## Installation
### backend
- [PostosgreSQL](https://www.postgresql.org)
- [PostGIS](https://postgresapp.com/)
- pip install django djangorestframework
- pip install django djangorestframework-gis
- pip install django-leaflet
- pip install -r requirements.txt
### Frontend
- npm install axios

## Usage
### ems_mapper(GeoDjango REST flamework)
1. Clone the repository.
2. cd into the repository.
3. Run `python3 -m venv env` to create a virtual environment.
4. Run `source env/bin/activate` to activate the virtual environment.
5. Run `python3 manage.py makemigrations` to record database model changes in the database migration file for Django
6. Run `python3 manage.py migrate` to update the database with model changes.
7. Run `python3 manage.py createsuperuser` to create an administrator account. Log in to the Django administrator site.
8. Run `python3 manage.py runserver` to start the server.
9. Open `127.0.0.1:8000` in your browser to view the application.
### EMS_frontEnd-main (ReactJS)
1. Clone the repository.
2. cd into the repository.
3. Run `npm start` to create a virtual environment.
4. Open `localhost:5173` the application.


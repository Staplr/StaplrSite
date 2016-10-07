# django-scaffold

## Run the following commands

`pip install -r misc/requirements.txt`

You will need to add the following two lines to your virtualenv/bin/active script. 
```
export PYTHONPATH=PATHTOPROJECT
export DJANGO_SETTINGS_MODULE=settings.development
```

Then use the development.example to build your development.py. Most of the time you will be able to copy and paste it.

Next create a database for the site to run off of. If you don't have Postgres installed you will need to install it.

`createdb DATABASENAMEHERE`

Then put that database name into your development.py and you should be able to run everything


Then to run the server
`django-admin runserver` or `django-admin runserver_plus` (This allows better debugging)


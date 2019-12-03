from django.db import connections
from django.db.utils import OperationalError
from django.forms import ValidationError

def check_connection():
    db_conn = connections['default']
    try:
        c = db_conn.cursor()
    except OperationalError:
        connected = False
    else:
        connected = True
    if not connected:
        raise ValidationError("failed to connect to database")

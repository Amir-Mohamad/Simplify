from rest_framework.test import RequestsClient
from rest_framework.test import APIClient
from rest_framework.authtoken.models import Token


token = Token.objects.get(user__username='amirm')
client = APIClient()
client.login(username='amirm', password='amir13845')
response = client.get('http://127.0.0.1:8000/api/', )
assert response.status_code == 200

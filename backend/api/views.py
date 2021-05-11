from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class PostViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]
    serializer
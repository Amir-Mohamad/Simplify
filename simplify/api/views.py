from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializers


class PostsViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(is_active=True)
    serializer_class = PostSerializers


class PostDetailView(APIView):
    def get(self, request, pk):
        qs = Post.objects.filter(pk=pk)
        serializer = PostSerializers(qs)
        return Response(serializer.data)
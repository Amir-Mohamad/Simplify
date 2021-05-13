from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(r'', views.PostsViewSet, basename='posts_list')


urlpatterns = [
    path('', include(router.urls)),
    path('<int:pk>/', views.PostDetailView.as_view(), name="detail")
]
from django.urls import include, path
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from blog import views

router = routers.DefaultRouter()
router.register(r'blog', views.PostView, 'blog')

urlpatterns = [
    path("api/", include(router.urls)),
      path('docs/', include_docs_urls(title='Post API')),
]
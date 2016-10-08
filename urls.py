from django.conf.urls import url, include

urlpatterns = [
    url(r'', include('apps.accounts.urls', namespace='staplr'))
]

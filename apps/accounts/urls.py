from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^sign_up', TemplateView.as_view(template_name='sign_up.html')),
    url(r'^dashboard', TemplateView.as_view(template_name='dashboard.html')),
    url(r'^deck/[\d]+', TemplateView.as_view(template_name='deck.html')),
    url(r'^note/[\d]+', TemplateView.as_view(template_name='note.html')),
    url(r'^courses', TemplateView.as_view(template_name='courses.html')),
    url(r'^poll', TemplateView.as_view(template_name='poll.html')),
    url(r'^create_poll', TemplateView.as_view(template_name='create_poll.html')),
    url(r'^', TemplateView.as_view(template_name='home.html')),
]
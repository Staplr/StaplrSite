from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^sign_up',  TemplateView.as_view('sign_up.html'), name="sign_up"),
    url(r'^dashboard',  TemplateView.as_view('dashboard.html'), name="dashboard"),
    url(r'^deck/[\d]+',  TemplateView.as_view('deck.html'), name="deck"),
    url(r'^note/[\d]+',  TemplateView.as_view('note.html'), name='note'),
    url(r'^courses',  TemplateView.as_view('courses.html'), name='courses'),
    url(r'^poll',  TemplateView.as_view('poll.html'), name='poll'),
    url(r'^create_poll',  TemplateView.as_view('create_poll.html'), name='create_poll'),
    url(r'^',  TemplateView.as_view('home.html'), name='home'),
]
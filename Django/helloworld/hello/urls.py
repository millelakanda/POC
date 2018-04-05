from django.conf.urls import url
from hello import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    url(r'^gethospitaldata/$',views.HospitalProfile.getHospitalProfile)
]
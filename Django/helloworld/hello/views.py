from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse
 
class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)


class HospitalProfile(TemplateView):
    def getHospitalProfile(request):
        data = '[{ "id" : 1, "name": "Boston Central", "serviceList": ["radiography","ultrasound","angiography","ENT","Neurology"], "address": "Boston"}]'
        return HttpResponse(data)

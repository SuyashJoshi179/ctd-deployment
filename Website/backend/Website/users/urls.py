from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('register/', Register.as_view()),
    path('accounts/', Accounts.as_view()),
    path('event_lines/', EventLinesList.as_view()),
    path('event_lines/<int:pk>', EventLinesDetail.as_view()),
    path('events/', EventsList.as_view()),
    path('events/<int:pk>', EventsDetail.as_view()),
    path('orders/', OrdersList.as_view()),
    path('orders/<int:pk>', OrderDetail.as_view()),
    path('place_order/', PlaceOrder.as_view()),
    path('download_csv/', exportToCSV),
    path('account_detail/', AccountDetailView.as_view()),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

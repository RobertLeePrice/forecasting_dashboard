from django.urls import path
from .views import *


urlpatterns = [
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', register_user, name='register'),
    path('', ListUsers.as_view(), name='users'),
    path('profile/', get_user_profile, name='user_profile'),
    path('profile/update/', update_user_profile, name='user_profile_update'),
]
from django.shortcuts import render
from api.models import User, Profile
from api.serializer import UserSerializer, TokenObtainPairSerializer, ProfileSerializer,RegisterSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics,status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

class TokenPairView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

@api_view(['GET'])
def getRoutes(request):
    routes = ['/api/toke',
              '/api/register',
              '/api/profile',
              '/api/users',
              '/api/token/refresh',
              ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == 'GET':
        context = f"Opa{request.user.username},vc fez um get"
        return Response({'response':context},status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get("text")
        response = f("Opa{request.user.username},vc fez um post com o texto {text}")
        return Response({'response':response},status=status.HTTP_200_OK)
    return Response({'response':'Invalid Method'},status=status.HTTP_400_BAD_REQUEST)

#django imports
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings

# rest framework imports
from rest_framework.authtoken.models import Token


class PlayMeManager(BaseUserManager):

    def create_user(self, username, email, fullname, college, mobile_number, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        if not username:
            raise ValueError("Users must have an username")
        if not fullname:
            raise ValueError("Users must have a fullname")
        if not college:
            raise ValueError("Users must have a college")
        if not mobile_number:
            raise ValueError("Users must have a mobile number")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            fullname=fullname,
            college=college,
            mobile_number=mobile_number,
            password=password
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, fullname, college, mobile_number, password):
        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            password=password,
            fullname=fullname,
            college=college,
            mobile_number=mobile_number
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class PlayMe(AbstractBaseUser):
    # these fields are required to create a new custom user model till the next hash
    username = models.CharField(max_length=100, default="lol", unique=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True, verbose_name='Date Joined')
    last_login = models.DateTimeField(auto_now=True, verbose_name='last_login')
    # ends over here

    # these are my custom user model fields
    fullname = models.CharField(max_length=100, default="John Doe")
    email = models.EmailField(blank=False)
    college = models.TextField(default="N/A")
    mobile_number = models.BigIntegerField(default=0, verbose_name="Phone Number")
    level = models.IntegerField(default=1, db_index=True)
    logout_time = models.DateTimeField(auto_now=True)
    last_level_update_time = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'username'

    objects = PlayMeManager()

    REQUIRED_FIELDS = ['fullname', 'email', 'password', 'college', 'mobile_number']

    def __str__(self):
        return f"{self.fullname} ({self.username})"

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    class Meta:
        verbose_name = 'Play Me'


class Question(models.Model):
    question = models.TextField(default="N/A", max_length=300)
    answer = models.CharField(default="N/A", max_length=100)
    level = models.IntegerField(default=1, unique=True)
    tips = models.TextField(default="N/A", max_length=100)
    image1 = models.URLField(max_length=2083, default=None, null=True)
    image2 = models.URLField(max_length=2083, default=None, null=True)
    image3 = models.URLField(max_length=2083, default=None, null=True)
    image4 = models.URLField(max_length=2083, default=None, null=True)

    def __str__(self):
        return f"{self.level} : {self.question}"


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
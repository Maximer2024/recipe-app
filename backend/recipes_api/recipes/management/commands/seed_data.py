from django.core.management.base import BaseCommand
from recipes.models import Category, Recipe

class Command(BaseCommand):
    help = 'Заполняет базу данных тестовыми категориями и рецептами'

    def handle(self, *args, **kwargs):
        breakfast = Category.objects.create(name='Завтрак', description='Утренние блюда')
        dinner = Category.objects.create(name='Ужин', description='Вечерние блюда')

        Recipe.objects.create(
            title='Блины',
            category=breakfast,
            ingredients='Мука, яйца, молоко, сахар, разрыхлитель',
            instructions='Смешайте ингредиенты, жарьте на горячей сковороде до золотистого цвета.'
        )
        Recipe.objects.create(
            title='Спагетти Болоньезе',
            category=dinner,
            ingredients='Спагетти, говяжий фарш, томатный соус, лук, чеснок',
            instructions='Сварите спагетти, приготовьте соус, смешайте и подавайте.'
        )

        self.stdout.write(self.style.SUCCESS('База данных успешно заполнена'))
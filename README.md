# Книга рецептов

Это фуллстек-приложение для просмотра рецептов блюд, разделённых по категориям. Бэкенд реализован на Django Rest Framework с автодокументацией OpenAPI+Swagger, фронтенд — на React с использованием react-router. Пользователи могут просматривать категории и рецепты, переходя по страницам.

## Технологии
- **Бэкенд**: Django, Django Rest Framework, drf-spectacular
- **Фронтенд**: React, react-router-dom, Tailwind CSS
- **Документация API**: Swagger UI

## Структура проекта
```
recipe-app/
├── backend/
│   ├── manage.py
│   ├── recipes_api/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── ...
│   ├── recipes/
│   │   ├── management/
│   │   │   ├── commands/
│   │   │   │   ├── seed_data.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CategoryList.js
│   │   │   ├── CategoryDetail.js
│   │   │   ├── RecipeDetail.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── ...
│   ├── package.json
│   ├── tailwind.config.js
│   └── ...
```

## Требования
- Python 3.8+
- Node.js 16+
- npm 8+
- Git

## Установка

### 1. Клонирование репозитория
```bash
git clone git@github.com:Maximer2024/recipe-app.git
cd recipe-app
```

### 2. Настройка бэкенда
1. Перейдите в папку `backend`:
   ```bash
   cd backend
   ```
2. Создайте и активируйте виртуальное окружение:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Для Windows: venv\Scripts\activate
   ```
3. Установите зависимости:
   ```bash
   pip install -r requirements.txt
   ```
4. Выполните миграции для создания базы данных:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
5. Заполните базу данных тестовыми данными:
   ```bash
   python manage.py seed_data
   ```
6. Запустите сервер:
   ```bash
   python manage.py runserver
   ```

### 3. Настройка фронтенда
1. Перейдите в папку `frontend`:
   ```bash
   cd ../frontend
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите фронтенд:
   ```bash
   npm start
   ```

### 4. Проверка работы
- Откройте `http://localhost:3000` для просмотра фронтенда.
- Перейдите на главную страницу, чтобы увидеть список категорий ("Завтрак", "Ужин").
- Кликните по категории, чтобы увидеть рецепты, или по рецепту, чтобы просмотреть детали.
- Документация API доступна по адресу `http://localhost:8000/api/docs/`.

## Дополнительные замечания
- Убедитесь, что бэкенд (на `http://localhost:8000`) запущен перед стартом фронтенда.
- Если фронтенд не подключается к API, проверьте настройки CORS в `backend/recipes_api/settings.py`.
# webpack-assem
# Заготовка сборки
Для установки пакетов используйте команду npm install

## Команды

### Запуск сервера для разработки
```shell
npm run start
```

### Сборка проекта с оптимизацией
```shell
npm run build
```

### Images to webp
````html
<picture>
    <source srcset="img/img.webp" type="image/webp">
    <img src="img/img.jpg" alt="test image">
</picture>
````

### Sprite
```shell
npm run sprite
```
```html
    <svg>
      <use xlink:href="img/sprite/sprite.svg#icon"></use>
    </svg>
```

### Nunjucks
```html
  {% include "./components/header/header.njk" %}
```

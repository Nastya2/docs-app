# Что реализованно из текста задания:

## Реализация: <view>
1) Пользователь открывает документ по ссылке, в которой есть id документа.
Приложение получает информацию о документе по API, в которой указаны
страницы со ссылками на изображения (смотрите приложенный json, его используйте как мокап). Изображения - это страницы документа, пользователь имеет возможность скроллить документ вниз для просмотра всех страниц.

Реализована ленивая загрузка страниц для оптимизации загрузки изображений, когда пользователь прокручивает текущую страницу до конца, загружается следующая.
Что можно улучшить:
Можно функцию прослушки события scroll поместить в директиву.
Оптимизировать работу события scroll вне zone.js, чтобы не запускать постоянно change detector при скролле.

## Реализация: <zoom>
2) Документ может быть увеличен или уменьшен (zoom) кнопками “+” и “-”.

Cложность возникла при увеличении картинки, при transform: scale() изображение увеличивалось относительно своего центра, что приводит к выходу за пределы окна, transform-origin решил эту проблему.

## Реализация: <annotation>
3) Пользователь может добавлять аннотации в виде текста или картинки.Добавленные аннотации можно перемещать и удалять.

Для диалогового окна и drag-and-drop использовала Angular Material.
Можно лучше подумать над абстракцией сущностей аннотаций, если потребуется расширять кол-во сущностей, чтобы расширять, а не модифицировать код.
Разделить на компонеты кнопки создания и сами аннотации.
Оптимизировать drag-and-drop вне zone.js.

### Скрины https://github.com/Nastya2/docs-app/tree/main/src/assets/screens

# CMS - Cat Management System

Cat Management System - тестовое задание для вакансии.\
RESTful API для SPA - [catmsapp](https://weeks6.github.io/catmsapp)

## Методы

### Все коты в базе данных
Тип запроса - GET\
Возвращает Array<Object>
```javascript
/api/cats
```
### Создать нового кота
Тип запроса - POST\
На вход: req.body: Object\
Возвращает Object - созданный Object кота
```javascript
/newcat/
```
### Отдельный кот по catId
Тип запроса - GET\
Возвращает Object
```javascript
/getcat/:catId
```
### Редактировать отдельного кота по catId
Тип запроса - PATCH\
На вход: req.body: Object\
Возвращает Object - изменный Object кота
```javascript
/editcat/:catId
```
### Удалить отдельного кота по catId
Тип запроса - DELETE\
Возвращает Object - информация об удаленном Object кота
```javascript
/deletecat/:catId
```




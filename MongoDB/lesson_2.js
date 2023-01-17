//! HomeWork
// 1) Вывести данные о всех женщинах старше 30 лет
db.users.find({ 
    $and: [
        {
            age: {$gte: 30},
            gender: 'f'
        }
    ]})

// 2) Вывести данные о всех женщинах и людях старше 30 лет
db.users.find({
    $or: [
      {gender: 'f'},
      {age: {$gt: 30}}
    ]
  })

// 3) Вывести данные о людях, чье имя входит в список: Anatoly, Dmitry, Semen, Olga
db.users.find({ 
    name: {$in: ['Anatoly', 'Dmitry', 'Semen', 'Olga']} 
  })

// 4) Вывести пользователей в возрасте от 30 до 40 (включая концы)
db.users.find({
    age: {$gte: 30, $lte: 40}
  })

// 5) Вывести пользователя с идентификатором 3
db.users.find({ id: 3 })


//TODO:
// 1. Из коллекции users извлечь все документы, у которых в поле age значение находится в диапазоне от 20 до 27 включительно;
db.users.find({
    $and: [
        {age: {$gte: 20}},
        {age: {$lte: 27}},
    ]
})

//Удаление элементов:
db.users.deleteOne({id: 3})

db.users.deleteMany({gender:'f'})

db.users.deleteMany({})

// TODO:

// 1. Создать коллекцию products
// 2. Заполнить коллекцию products данными из массива:

[  
    {
      id: 1,
      title: "Велосипед",
      price: 45000,
      count: 12
    },
      {
      id: 2,
      title: "Самокат",
      price: 15000,
      count: 10
    },
    {
      id: 3,
      title: "Ролики",
      price: 20000,
      count: 20
    },
    {
      id: 4,
      title: "Лыжи",
      price: 22000,
      count: 15
    },
    {
      id: 5,
      title: "Скейт",
      price: 19000,
      count: 4
    },
    {
      id: 6,
      title: "Сноуборд",
      price: 33000,
      count: 17
    }
  ]

// 3. Извлечь все продукты, число которых больше 10
db.products.find({
    count: {$gt: 10}
})

// 4. Извлечь продукты, количество которых от 10 до 20 (включительно) и цена больше (>= 20000)
db.products.find({
        count: {$gte: 10, $lte: 20},
        price: {$gte: 20000}
})

// 5. Извлечь документы о продуктах Скейт, Сноуборд, Лыжи, в случае если их цена меньше 20000

db.products.find({
    title: {$in: ['Скейт', 'Сноуборд', 'Лыжи']},
    price: {$lt: 20000}
  })

//! UPDATE - обновление
//? updateOne(), updateMany()

//TODO: У документа с ID 6 изменить цену на 35000

db.products.updateOne(
    {id: 6},
    {$set: {id: 7, country: 'Germany'}}
)

db.products.updateMany(
    {},
    {$set: {country: 'France'}})

// У документов с айди 1, 3, 5 задать значение count 15
db.products.updateMany(
    {id: {$in: [1, 3, 5]}},
    {$set: {count: 15}}
    )

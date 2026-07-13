use("Wa-Vibe-Fashion-db")

//Clear existing data
db.users.deleteMany({});

//Insert mock data for users collection
db.users.insertMany([
    {
      "_id": objectID("..."),
      "username": "LadyFirst",
      "password": "01234",
      "email": "LadyFirst@example.com",
      "phone_number": "000-000-0000",
      "address": "00 ถนนสายวัดโคก ตำบลบางปรอก จังหวัดปทุมธานี 12000",
      "role": "customer",
      "shopping_cart": [
          {
            "product_id": objectID("..."),
            "product_name": "angel dress",
            "quantity":1,
            "size": "M",
            "color": "blue",
            "price": 1500
          } 
      ]
    },

    {
      "_id": objectID("..."),
      "username": "Ladybug",
      "password": "45678",
      "email": "Ladybug@example.com",
      "phone_number": "088-888-8888",
      "address": "11 ถนนสายวัดโคก ตำบลบางปรอก จังหวัดปทุมธานี 12000",
      "role": "customer",
      "shopping_cart": [
          {
            "product_id": objectID("..."),
            "product_name": "bilal dress",
            "quantity":1,
            "size": "L",
            "color": "brown",
            "price": 2000
          }
      ]
    },

    {
      "_id": objectID("..."),
      "username": "Kitten",
      "password": "45501",
      "email": "Kitten@example.com",
      "phone_number": "099-999-9999",
      "address": "01 ถนนสายวัดโคก ตำบลบางปรอก จังหวัดปทุมธานี 12000",
      "role": "customer",
      "shopping_cart": [
        {
          "product_id": objectID("..."),
          "product_name": "hafiz dress",
          "quantity":1,
          "size": "M",
          "color": "black",
          "price": 3000
        }
      ]
    },

    {
      "_id": objectID("..."),
      "username": "Admin A",
      "password": "00000",
      "email": "AdminA@example.com",
      "phone_number": "02-000-0000",
      "role": "admin",
      "address": "44 ถนนสายไหน ตำบลไม่รู้ จังหวัดคิดไม่ออกแล้ว 12000"
    },

    {
      "_id": objectID("..."),
      "username": "Cashier B",
      "password": "11111",
      "email": "CashierB@example.com",
      "phone_number": "02-222-2222",
      "role": "cashier",
      "address": "55 ถนนอะไรดี ตำบลสภาพ จังหวัดสมองบวม 12000"
    }



















]);
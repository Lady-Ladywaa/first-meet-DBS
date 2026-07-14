use("Wa-Vibe-Fashion-db")

//Clear existing data
db.users.deleteMany({});

//Insert mock data for users collection
db.users.insertMany([
    {
      "_id": ObjectId("6a5439e71d3bd7ec6e9a69e0"),
      "username": "LadyFirst",
      "password": "01234",
      "email": "LadyFirst@example.com",
      "phone_number": "000-000-0000",
      "address": "00 ถนนสายวัดโคก ตำบลบางปรอก จังหวัดปทุมธานี 12000",
      "role": "customer",
      "shopping_cart": [
          {
            "product_id": ObjectId("6a5439e751dda74c52c60170"),
            "product_name": "angel dress",
            "quantity":1,
            "size": "M",
            "color": "blue",
            "price": 1500
          } 
      ]
    },

    {
      "_id": ObjectId("6a5439e7d9ed02754f5e22a0"),
      "username": "Ladybug",
      "password": "45678",
      "email": "Ladybug@example.com",
      "phone_number": "088-888-8888",
      "address": "11 ถนนสายวัดโคก ตำบลบางปรอก จังหวัดปทุมธานี 12000",
      "role": "customer",
      "shopping_cart": [
          {
            "product_id": ObjectId("6a5439e786b087e97fe641b9"),
            "product_name": "bilal dress",
            "quantity":1,
            "size": "L",
            "color": "brown",
            "price": 2000
          }
      ]
    },

    {
      "_id": ObjectId("6a5439e7f8574dd822b8ad80"),
      "username": "Kitten",
      "password": "45501",
      "email": "Kitten@example.com",
      "phone_number": "099-999-9999",
      "address": "01 ถนนสายวัดโคก ตำบลบางปรอก จังหวัดปทุมธานี 12000",
      "role": "customer",
      "shopping_cart": [
        {
          
        }
      ]
    },

    // Admin and Cashier users
    {
      "_id": ObjectId("6a5439e7de3963c238442292"),
      "username": "Admin A",
      "password": "00000",
      "email": "AdminA@example.com",
      "phone_number": "02-000-0000",
      "role": "admin",
      "address": "44 ถนนสายไหน ตำบลไม่รู้ จังหวัดคิดไม่ออกแล้ว 12000"
    },

    {
      "_id": ObjectId("6a543aef7c087ea804f08766"),
      "username": "Cashier B",
      "password": "11111",
      "email": "CashierB@example.com",
      "phone_number": "02-222-2222",
      "role": "cashier",
      "address": "55 ถนนอะไรดี ตำบลสภาพ จังหวัดสมองบวม 12000"
    },
    
]);

 db.users.find()
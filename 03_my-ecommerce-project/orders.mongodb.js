use("Wa-Vibe-Fashion-db")

//Clear existing data
db.orders.deleteMany({});

//Insert mock data for orders collection
db.orders.insertMany([
    {
      "order_id": ObjectId("..."),
      "user_id": ObjectId("6a5439e71d3bd7ec6e9a69e0"),
      "products": [
        {
            "product_id": ObjectId("6a5439e751dda74c52c60170"),
            "product_name": "angel dress",
            "quantity": 1,
            "size": "M",
            "color": "blue",
            "price": 1500,
            "total price": "1500"

        }
      ]

    }
]);
db.orders.find()
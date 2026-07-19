use("Wa-Vibe-Fashion-db")

//Clear existing data
db.orders.deleteMany({});

//Insert mock data for orders collection
db.orders.insertMany([
    {
      "orderid": ObjectId("..."),
      "userid": ObjectId("6a5439e71d3bd7ec6e9a69e0"),
      "products": [
        {
            "productid": ObjectId("6a5439e751dda74c52c60170"),
            "productname": "angel dress",
            "quantity": 1,
            "size": "M",
            "color": "blue",
            "price": 1500,
            "totalprice": 1500

        },
        {"productid":  ObjectId(".."),
          "productname": "hijab ปักมุก",
          "quantity": 1,
          "color": "blue",
          "price": 390,
          "totalprice": 390
        }
      ],
       

    totalAmount: 1890,

    paymentStatus: "Pending",

    orderStatus: "Pending",

    createdAt: new Date(),

    updatedAt: new Date()
      

    }

    
]);
db.orders.find()
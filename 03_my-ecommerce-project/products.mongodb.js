use("Wa-Vibe-Fashion-db")

//Clear existing data
db.products.deleteMany({});

//Insert mock data for products collection
db.products.insertMany([
    {
        "_id": ObjectId("6a5439e751dda74c52c60170"),
        "product_name": "angel dress",
        "description": "A beautiful angel dress with elegant design",
        "price": 1500,
        "category": "dress",
        "sizes": ["s", "M", "L",],
        "colors": ["blue", "black", "pink"],
        "image_url": "",
        "stock_quantity": 15,
        "is_active": true,
        "created_at": new Date("2026-07-20T08:25:00.000Z")
    },

    {
        "_id": ObjectId("6a5439e786b087e97fe641b9"),
        "product_name": "bilal dress",
        "description": "A beautiful bilal dress with elegant design",
        "price": 2000,
        "category": "dress",
        "sizes": ["s", "M", "L",],
        "colors": ["blue", "black", "pink"],
        "image_url": "",
        "stock_quantity": 25,
        "is_active": true,
        "created_at": new Date("2026-07-15T08:23:00.000Z")
    },

    {
          "_id": ObjectId("6a543aef7c087ea804f08766"),
        "product_name": "hafiz dress",
        "description": "A beautiful hafiz dress with elegant design",
        "price": 1500,
        "category": "dress",
        "sizes": ["s", "M", "L",],
        "colors": ["blue", "black", "pink"],
        "image_url": "",
        "stock_quantity": 15,
        "is_active": true,
        "created_at": new Date("2026-07-14T08:22:00.000Z")
    }
]);
 db.products.find()
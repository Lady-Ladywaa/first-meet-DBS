use("Wa-Vibe-Fashion-db")

//Clear existing data
db.products.deleteMany({});

//Insert mock data for products collection
db.products.insertMany([
    {
        "_id": ObjectId("6a5439e751dda74c52c60170"),
        "productName": "angel dress",
        "description": "ชุดเดรสสำหรับออกงาน",
        "salePrice": 1500,
        "imageUrl"  รูป,
        "canSale": true,
        "canRental": false,
        "category": "dress",
        "sizes": ["s", "M", "L",],
        "colors": ["blue", "black", "pink"],
        "stockQuantity": 15,
        "isActive": true,   //บ่งบอกถึงสินค้ายังมีขายอยู่ไหม ยังขายใช้ true ไม่ขาย false หรือกำลังบอกว่าสินค้านี้เปิดขายอยู่นั่นเอง
        "createdAt": new Date("2026-07-20T08:25:00.000Z"),  //วันที่เพิ่มสินค้า
        "updatedAt": new Date()  //อัพเคทเวลาเช่น แก้ไขราคา หรืออื่นๆ
    },

    {
        "_id": ObjectId("6a5439e786b087e97fe641b9"),
        "productName": "bilal dress",
        "description": "ชุดเดรสสำหรับออกงาน",
        "salePrice": 2000,
        "imageUrl"  รูป,
        "canSale": true,
        "canRental": false,
        "category": "dress",
        "sizes": ["s", "M", "L",],
        "colors": ["blue", "black", "pink"],
        "stockQuantity": 25,
        "isActive": true,
        "createdAt": new Date("2026-07-15T08:23:00.000Z"),
        "updatedAt": new Date()
    },

    {
        "_id": ObjectId("6a543aef7c087ea804f08766"),
        "productName": "hafiz dress",
        "description": "ชุดเดรสสำหรับออกงาน",
        "salePrice": 1500,
        "imageUrl"  รูป,
        "canSale": true,
        "canRental": false,
        "category": "dress",
        "sizes": ["s", "M", "L",],
        "colors": ["blue", "black", "pink"],
        "stockQuantity": 15,
        "isActive": true,   
        "createdAt": new Date("2026-07-14T08:22:00.000Z"),
        "updatedAt": new Date()
    },
       //สินค้าที่สามารถเช่าได้
    {
        "_id": ObjectId("adf222222222222222222222"),
        "productName": "wawa dress",
        "description": "ชุดเดรสสำหรับออกงาน",
        "canAlter": true,  //ชุดนี้แก้ไซส์ได้ 2-3นิ้ว
        "alterationDetail": "ปรับขนาดเข้า-ออกได้ 2-3 นิ้ว",
        "maxRentalDays": 4,
        "rentalPrice": 1000,
        "deposit": 500,   //เงินมัดจำ
        "lateFeePerDay": 100,  //คืนชุดช้าคิดวันละ 100บาท 
        "imageUrl"  รูป,
        "canSale": false,
        "canRental": true,
        "category": "dress",
        "sizes": ["s", "M", "L",],
        "colors": ["navy", "beige"],
        "stockQuantity": 2,
        "isActive": true,
        "createdAt": new Date("2026-07-14T08:22:00.000Z"),
        "updatedAt": new Date()
    },

    {
       "_id": ObjectId("adf3333333333333333333"),
        "productName": "สร้อยคอ",
        "description": "สร้อยคอสำหรับเช่าออกงาน",
        "maxRentalDays": 4,  // เช่าได้ไม่เกิน 4วัน
        "rentalPrice": 200,  //ในส่วนเงินมัดจำจะรวมไปกับชุดที่ลูกค้าต้องการเช่า ในกรณีที่ลูกค้าต้องการเช่าเครื่องประดับไปพร้อมกับชุด เราไม่ได้คิดเงินมัดจำเครื่องประดับเพิ่ม
        "lateFeePerDay": 100,  //คืนช้าคิดวันละ 100บาท 
        "imageUrl"  รูป,
        "canSale": false,
        "canRental": true,
        "category": "accessery",
        "stockQuantity": 5,
        "isActive": true,
        "createdAt": new Date("2026-07-14T08:22:00.000Z"),
        "updatedAt": new Date() 
    }
]);
 db.products.find()
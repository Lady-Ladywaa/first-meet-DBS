use("Wa-Vibe-Fashion-db")

//Clear existing data
db.rentalBookings.deleteMany({});

//Insert mock data for rentalbookings collection
db.rentalBookings.insertMany([
    {
        "userId": ObjectId(""),
        "items":
        [
            {
               "productId": ObjectId(".."),
               "productName": "wawa dress",
               "rentalPrice": 1000,  
               "deposit": 500,
            }
        ],
        
        "totalAmount": 1500,                 // เงินที่ลุกค้าต้องจ่ายในตอนแรก คือค่าเช่าชุด/เครื่องประดับ+เงินมัดจำ
        "rentalStartDate": new Date(""),  //วันที่ลูกค้ารับชุดเช่า
        "rentalStatus": "Reserved",     //สถานะการเช่า  Reserved=จองแล้ว Borrowed=กำลังเช่าอยู่ Returned=คืนแล้ว Completed=เสร็จสมบูรณ์คือ ตรวจสภาพแล้ว คืนชุดและเงินมัดจำแล้ว
        "returnStatus": "Waiting",       //สถานะการคืนสินค้า  Waiting= คือลูกค้ายังไม่คืนสินค้า  Returned= ลูกค้าคืนสินค้าแล้วแต่ว่ายังต้องตรวจสอบก่อน Checking=กำลังตรวจสอบ Damaged=ชุดเสียหาย
        "rentalEndDate": new Date(""),   // วันครบกำหนดลูกค้าคืนชุด
        "actualReturnDate":  null,       // วันที่ลูกค้านำมาคืนจริง  ถ้าลูกค้าคืนจริงแล้วค่อยใส่วันที่ new Date(""),         
        "paymentStatus": "Pending",           // paymentStatus คือ สถานะการชำระเงิน  Pending=รอชำระ Paid=ชำระเงินแล้ว Refunded=คืนเงินแล้ว เช่นลูกค้ายกเลิก, ร้านยกเลิก      
        "createdAt": new Date(),
        "updatedAt": new Date()

    }

]);

db.rentalBookings.find()
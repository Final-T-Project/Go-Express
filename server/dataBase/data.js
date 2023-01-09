/**
 -product :
path : http://localhost:5000/products/addProduct
1
 {
  "sellIerd": "A",
  "buyerId": "null",
  "name": "Bed",
  "category": "Furniture",
  "price": 150,
  "description": "Modern Bedroom",
  "photo": "https://cdn.shopify.com/s/files/1/0044/1208/0217/products/MARTHURKBWOSTRWNT-1_900x.jpg?v=1648190067",
  "quantity": 1,
  "id_user": "A",
  "id_cart": 2
}

-user 
path : http://localhost:5000/users/addUser

{
  "id_user": "A",
  "name": "ahmed",
  "email": "ahmed@gmail.com"
}
-cart :
path : http://localhost:5000/carts/addCart

{
  "payment_type": "Cash",
  "date": "05/01/23",
  "user_id_user": "A",
  "state": "not done"
}


-admin : 
path : http://localhost:5000/admin/getallproduct







**/

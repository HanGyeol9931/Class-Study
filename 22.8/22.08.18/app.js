// mysql 편하게 쓰기
// sequelize 사용 그리고 FOREIGN KEY 사용
// 관계형 데이터 베이스 만들기

// 지금 사용할 모듈 mysql2 dotenv

const mysql = require("mysql2");
// config.js에서 내보낸 객체가 담긴다.
const config = require("./config")

const client = mysql.createConnection(config.dev);
// const sql ="CREATE TABLE users (id INT AUTO_INCREMENT, username varchar(255), PRIMARY KEY (id));";
// const sql2 ="CREATE TABLE items (id INT AUTO_INCREMENT,name varchar(255),price INT,image varchar(255),PRIMARY KEY (id));";
// const sql3 = "CREATE TABLE orders (id INT AUTO_INCREMENT,user_id INT,total_price INT,created_at datetime DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY (id));"
// const sql4 = "CREATE TABLE order_items (id INT AUTO_INCREMENT,order_id INT,item_id INT,order_quantity INT,PRIMARY KEY (id));"

// ALTER 테이블 속성을 바꿔주는 것
// const sql5 = "ALTER TABLE orders ADD FOREIGN KEY (user_id) REFERENCES users (id);"
// // FOREIGE KEY 추가하는데 orders 테이블 연결
// const sql6 = "ALTER TABLE order_items ADD FOREIGN KEY (order_id) REFERENCES orders (id);"
// const sql7 = "ALTER TABLE order_items ADD FOREIGN KEY (item_id) REFERENCES items (id);"
// client.query( sql5 + sql6 + sql7)
// console.log(config)

// const sql8 = `INSERT INTO items (name, price, image) VALUES
// ("첫번째",1000,"/"),
// ("두번쨰",2000,"/");`

// const sql9 = `INSERT INTO users (username) VALUES ("안뇽");`

// client.query(sql8 + sql9)

// INNER JOIN 두개의 테이블이 공통된 부분만 (참조된 것들) 합치는 것
// id,user_id,item_id끼리 합쳐짐


// SELECT 부분이 찾을 값들 FROM 전까지
// INNER JOIN order_items ON (order_items.item_id = items.id)
// order_items의 items_id 값이랑 items 테이블의 id 값이랑 같은 값을 합친다.

// const sql13 = `SELECT orders.id, orders.created_at,
// orders.total_price, items.name, items.price, items.image,
// order_items.order_quantity FROM items
// INNER JOIN order_items ON (order_items.item_id = items.id)
// INNER JOIN orders ON (orders.id = order_items.order_id)
// WHERE (orders.user_id = ?)`;

// client.query(sql13,[1],(err,result)=>{
//     console.log(result)
// })


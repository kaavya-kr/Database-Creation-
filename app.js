const express = require('express');
const db =require('./util/database');
const bodyParser = require('body-parser');
const app =express();
const adminRoutes=require('./routes/routes');
// db.execute('create table cart(cartid int primary key,quantity int,userId int ,FOREIGN KEY(userId) REFERENCES user(userId),productId int ,FOREIGN KEY(productId)REFERENCES product(productId) )');
app.use(bodyParser.json());
 app.use('/api/v1',adminRoutes);

app.listen(3000);
var express=require('express')
var mysql=require('mysql')

var app=express()
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'item',
	port:3307
})

app.get('/',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err) throw err   // express提供语法
		var sql='delete from news where id=1'
		connection.query(sql,(err,data)=>{
			if(err) throw err
			res.send(data)
			connection.end()
		})
	})
})

app.listen(3002)

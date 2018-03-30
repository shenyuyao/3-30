<template>
	<div class="box">
		<h1>新闻</h1>
		<button class="add">+</button>
		<div class="content">
			<ul v-for="i in arr" class="clearfix">
				<li>{{i.tit}}</li>
				<li>{{i.con}}</li>
				<li><button class="delete" @click="deletes">x</button></li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		created() {
			this.$http.get("http://localhost:3001").then(e => this.arr = e.body)

		},
		data() {
			return {
				arr: []
			}
		},
		methods: {
			deletes(e) {
				alert("删除成功，点击刷新")
				this.$http.get('http://localhost:3002', {id: 1}, {"emulateJSON": true})
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	
	.clearfix:before,
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.clearfix {
		zoom: 1;
	}
	
	.box {
		width: 800px;
		border: 1px solid red;
		margin: auto;
	}
	
	h1 {
		text-align: center;
		line-height: 100px;
	}
	
	.add {
		width: 80px;
		height: 40px;
		font-size: 30px;
		margin-bottom: 20px;
	}
	
	.delete {
		width: 60px;
		height: 30px;
		font-size: 20px;
	}
	
	.content {
		border-top: 1px solid #ccc;
	}
	
	.content ul {
		border-bottom: 1px solid #ccc;
	}
	
	.content li {
		list-style: none;
	}
	
	.content li:nth-child(1) {
		line-height: 40px;
		text-indent: 20px;
	}
	
	.content li:nth-child(2) {
		text-indent: 20px;
	}
	
	.content li:nth-child(3) {
		float: right;
		margin-bottom: 10px;
	}
</style>
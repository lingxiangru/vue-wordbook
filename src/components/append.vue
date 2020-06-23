<template>
	<div class="container border mt-5 p-0 bg-light" style="width: 500px;height: 500px;">
		<nav class="navbar bg-dark">
			<button class="btn btn-sm btn-outline-light" @click="back">返回</button>
			<span class="navbar-brand text-white mx-auto">添加新单词</span>
		</nav>
		<form @keydown.enter="append">
			<div>
				<ul class="list-group border-0">
					<li class="list-group-item border-0 bg-light py-1"><span style="font-size: 14px;color: dimgray;">录入新单词</span></li>
					<li class="list-group-item border-0 bg-whilte my-2 d-flex d-inline">
						<span style="width: 50px;line-height: 36px;" class="font-weight-bolder">单词</span>
						<input type="text" class="form-control" placeholder="请输入一个单词" v-model="word">
					</li>
					<li class="list-group-item border-0 bg-whilte my-2 d-flex d-inline">
						<span style="width: 50px;line-height: 36px;" class="font-weight-bolder">发音</span>
						<input type="text" class="form-control" placeholder="请输入此单词的发音" v-model="pron">
					</li>
					<li class="list-group-item border-0 bg-whilte my-2 d-flex d-inline">
						<span style="width: 50px;line-height: 36px;" class="font-weight-bolder">中文</span>
						<input type="text" class="form-control" placeholder="请输入汉语意思" v-model="chinese">
					</li>
				</ul>
			</div>
			<div class="d-flex justify-content-center" style="margin-top: 100px;">
				<button type="button" class="btn btn-primary w-75" @click="append">确认添加</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				word:"",
				pron:"",
				chinese:"",
				uid:JSON.parse(sessionStorage.getItem("user")).id
			}
		},
		methods:{
			back(){
				this.$router.push("/main")
			},
			append(){
				if(this.word==""||this.pron==""||this.chinese==""){
					alert("数据不能为空")
					return;
				}
				var that = this;
				this.$axios.post(
					"wordbook/insertOne",
					this.$qs.stringify({
						word:this.word,
						pron:this.pron,
						chinese:this.chinese,
						uid:this.uid
					})
				).then(function(response){
					if(response.status==200){
						if(response.data!=""){
							alert("添加成功");
							that.$router.push("/main");
						}else{
							alert("添加失败")
						}
					}else{
						alert("请求失败")
					}
				}).catch(function(error){
					console.log(error);
				})
			}
		}
	}
</script>

<style>
</style>

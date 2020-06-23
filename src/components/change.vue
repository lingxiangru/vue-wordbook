<template>
	<div class="container border mt-3 p-0 bg-light" style="width: 500px;height: 500px;">
		<nav class="navbar bg-dark">
			<button class="btn btn-sm btn-outline-light" @click="back">返回</button>
			<span class="navbar-brand text-white mx-auto">修改单词</span>
		</nav>
		<form @keydown.enter="change">
			<div>
				<ul class="list-group border-0">
					<li class="list-group-item border-0 bg-whilte my-2 d-flex d-inline">
						<span style="width: 50px;line-height: 36px;" class="font-weight-bolder">单词</span>
						<input type="text" class="form-control" :value="wordb.word" @change="changew">
					</li>
					<li class="list-group-item border-0 bg-whilte my-2 d-flex d-inline">
						<span style="width: 50px;line-height: 36px;" class="font-weight-bolder">发音</span>
						<input type="text" class="form-control" :value="wordb.pron" @change="changep">
					</li>
					<li class="list-group-item border-0 bg-whilte my-2 d-flex d-inline">
						<span style="width: 50px;line-height: 36px;" class="font-weight-bolder">中文</span>
						<input type="text" class="form-control" :value="wordb.chinese" @change="changec">
					</li>
				</ul>
			</div>
			<div class="d-flex justify-content-center" style="margin-top: 100px;">
				<button type="button" class="btn btn-primary w-75" @click="change">确认修改</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				wordb:{
					id:"",
					word:"",
					chinese:"",
					pron:"",
					uid:""
				}
			}
		},
		methods:{
			change(){
				var that = this;
				if(this.wordb.word==""||this.wordb.pron==""||this.wordb.chinese==""){
					alert("数据不能为空")
					return;
				}
				this.$axios.post("wordbook/updateOne",this.$qs.stringify(
					that.wordb
				)).then(function(response){
					if(response.status==200){
						if(response.data!=""){
							alert("修改成功")
							that.$router.push("/main")
						}else{
							alert("修改失败")
						}
					}else{
						alert("请求失败")
					}
				}).catch(function(error){
					console.log(error);
				})
			},
			back(){
				this.$router.push("/main")
			},
			changew(){
				this.wordb.word = event.target.value;
			},
			changep(){
				this.wordb.pron = event.target.value;
			},
			changec(){
				this.wordb.chinese = event.target.value;
			}
		},
		mounted() {
			var that = this;
			this.$axios.post("wordbook/selectOne",this.$qs.stringify({
				id:sessionStorage.getItem("changeid")
			})).then(function(response){
				if(response.status==200){
					if(response.data!=""){
						that.wordb = response.data
						sessionStorage.removeItem("changeid")
					}else{
						alert("数据不存在")
					}
				}else{
					alert("请求失败")
				}
			}).catch(function(error){
				console.log(error);
			})
		}
	}
</script>

<style>
</style>

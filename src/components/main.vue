<template>
	<div class="container border mt-3 p-0" style="width: 500px;">
		<nav class="navbar bg-dark">
			<span class="dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown">
				{{user.username}}
			</span>
			<div class="dropdown-menu">
				<router-link class="dropdown-item" to="/changepwd" tag="a" @click="changepwd">修改密码</router-link>
				<div class="dropdown-divider"></div>
				<router-link class="dropdown-item" to="/" tag="a" @click="logout">退出</router-link>
			</div>
			<span class="navbar-brand text-white">我的单词本</span>
			<button class="btn btn-outline-success my-2" type="button" @click="append">添加单词</button>
		</nav>
		<ul class="list-group bg-light">
			<li class="list-group-item m-2 d-flex justify-content-between border rounded" v-for="(item,index) in list" :key="index">
				<div>
					<div>
						<span class="font-weight-bolder">{{item.word}}</span>
						<span class="ml-2">[{{item.pron}}]</span>
					</div>
					{{item.chinese}}
				</div>
				<span>
					<button class="btn btn-outline-danger" @click="del(index)">删除</button>
					<button class="btn btn-secondary ml-1" @click="change(index)">修改</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: JSON.parse(sessionStorage.getItem("user")),
				list: []
			}
		},
		methods: {
			append(){
				this.$router.push("/append")
			},
			logout(){
				sessionStorage.removeItem("user");
				this.$router.push("/");
			},
			del(index){
				var that = this;
				this.$axios.post("/wordbook/deleteOneById", this.$qs.stringify({
					"id": this.list[index].id
				})).then(function(response) {
					if(response.status==200){
						if(response.data){
							alert("删除成功")
							that.list.splice(index,1)
						}else{
							alert("删除失败")
						}
					}else{
						alert("请求失败")
					}
				}).catch(function(error) {
					console.log(error);
				})
			},
			change(index){
				var id = this.list[index].id;
				sessionStorage.setItem("changeid",id);
				this.$router.push("/change");
			},
			changepwd(){
				this.$router.push("/changepwd");
			}
		},
		mounted() {
			var that = this;
			this.$axios.post("/wordbook/selectAllByUid", this.$qs.stringify({
				"uid": this.user.id
			})).then(function(response) {
				if(response.status==200){
					if(response.data!=""){
						that.list = response.data;
					}else{
						alert("数据为空")
					}
				}else{
					alert("请求失败")
				}
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>

<style>
</style>

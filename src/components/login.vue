<template>
	<div class="container border py-5 mt-5" style="width: 500px;">
		<div id="top_box" class="rounded text-center p-5">
			<h3 class="bg-white w-25 rounded p-1 m-auto">单词本</h3>
			<h3 class="text-white font-weight-light">English Word Book</h3>
		</div>
		<form class="mt-5" @keydown.enter="login">
			<div class="form-group">
				<label for="username">UserName:</label>
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">@</div>
					</div>
					<input style="box-shadow: none;border-color: #D4D9DE;" type="text" id="username" class="form-control" placeholder="请输入用户名" v-model="username">
				</div>
			</div>
			<div class="form-group">
				<label for="userpwd">Password:</label>
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">$</div>
					</div>
					<input style="box-shadow: none;border-color: #D4D9DE;" type="password" id="userpwd" class="form-control" placeholder="请输入密码" v-model="userpwd">
				</div>
			</div>
			<button type="button" class="btn btn-primary w-100 mt-2" @click="login">登录</button>
		</form>
		<div class="d-flex justify-content-end mt-2">
			<router-link to="/register">注册</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				userpwd: ""
			}
		},
		methods: {
			login() {
				var that = this;
				if(this.username==""||this.userpwd==""){
					alert("请输入用户名或密码");
					return;
				}
				this.$axios.post(
					"/user/login", this.$qs.stringify({
						"username": this.username,
						"userpwd": this.userpwd
					})
				).then(function(response) {
					if(response.status==200){
						if(response.data!=""){
							sessionStorage.setItem("user",JSON.stringify(response.data))
							that.$router.push("/main")
						}else{
							alert("用户名或密码错误")
						}
					}else{
						alert("请求失败")
					}
				}).catch(function(error) {
					console.log(error)
				})
			}
		}
	}
</script>

<style>
	#top_box {
		background-image: url(../assets/1.jpg);
		background-repeat: no-repeat;
	}
</style>

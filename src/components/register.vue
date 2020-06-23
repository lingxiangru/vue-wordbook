<template>
	<div class="container border py-4 mt-5" style="width: 500px;">
		<div id="top_box" class="rounded text-center p-5">
			<h3 class="bg-white w-25 rounded p-1 m-auto">单词本</h3>
			<h3 class="text-white font-weight-light">English Word Book</h3>
		</div>
		<form class="mt-5" @keydown.enter="register">
			<div class="form-group">
				<label for="username">UserName:</label>
				<input type="text" id="username" class="form-control" placeholder="请输入用户名" v-model="username">
			</div>
			<div class="form-group">
				<label for="userpwd">Password:</label>
				<input type="password" id="userpwd" class="form-control" placeholder="请输入密码" v-model="userpwd">
			</div>
			<div class="form-group">
				<label for="phone">Phone:</label>
				<input type="text" id="phone" class="form-control" placeholder="请输入手机号" v-model="phone">
			</div>
			<button type="button" class="btn btn-primary w-100 mt-2" @click="register">注册</button>
		</form>
		<div class="d-flex justify-content-end mt-2">
			<router-link to="/">返回登录</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				userpwd: "",
				phone: ""
			}
		},
		methods: {
			register() {
				var that = this;
				if(this.username==""||this.userpwd==""){
					alert("请输入用户名、密码或手机号");
					return;
				}
				this.$axios.post(
					"user/register", this.$qs.stringify({
						"username": this.username,
						"userpwd": this.userpwd,
						"phone": this.phone
					})
				).then(function(response) {
					if(response.status==200){
						if(response.data!=""){
							alert("注册成功")
							that.$router.push("/")
						}else{
							alert("注册失败")
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

<template>
	<div class="container border py-5 mt-5" style="width: 500px;">
		<div>
			<h3 class="text-center font-weight-bold">修改密码</h3>
		</div>
		<form class="mt-5" @keydown.enter="change">
			<div class="form-group">
				<label for="username">用户名:</label>
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">@</div>
					</div>
					<input style="box-shadow: none;" type="text" id="username" class="form-control" :value="user.username" readonly="readonly">
				</div>
			</div>
			<div class="form-group">
				<label for="userpwd">原密码:</label>
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">$</div>
					</div>
					<input style="box-shadow: none;" type="password" id="userpwd" class="form-control" placeholder="请输入原密码" v-model="oldpwd">
				</div>
			</div>
			<div class="form-group">
				<label for="newpwd">新密码:</label>
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">$</div>
					</div>
					<input style="box-shadow: none;" type="password" id="newpwd" class="form-control" placeholder="请输入新密码" v-model="newpwd">
				</div>
			</div>
			<button type="button" class="btn btn-danger w-100 mt-2" @click="change">修改</button>
			<button type="button" class="btn btn-primary w-100 mt-2" @click="back">返回</button>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:{},
				oldpwd:"",
				newpwd:""
			}
		},
		methods:{
			change(){
				var that = this;
				if(this.newpwd==""){
					alert("请输入新密码")
					return;
				}
				if(this.oldpwd!=this.user.userpwd){
					alert("原密码错误")
					return;
				}else{
					this.user.userpwd = this.newpwd;
					this.$axios.post("user/update",this.$qs.stringify(
						that.user
					)).then(function(response){
						if(response.status==200){
							if(response.data!=""){
								alert("修改成功")
								sessionStorage.setItem("user",JSON.stringify(response.data))
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
				}
			},
			back(){
				this.$router.push("/main")
			}
		},
		mounted() {
			var that = this;
			this.$axios.post("user/selectOne",this.$qs.stringify({
				"id":JSON.parse(sessionStorage.getItem("user")).id
			})).then(function(response){
				if(response.status==200){
					if(response.data!=""){
						that.user = response.data;
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

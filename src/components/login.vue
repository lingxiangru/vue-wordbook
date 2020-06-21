<template>
	<div class="container border py-5 mt-5" style="width: 500px;">
		<div id="top_box" class="rounded text-center p-5">
			<h3 class="bg-white w-25 rounded p-1 m-auto">单词本</h3>
			<h3 class="text-white font-weight-light">English Word Book</h3>
		</div>
		<form class="mt-5">
			<div class="form-group">
				<label for="username">UserName:</label>
				<input type="text" id="username" class="form-control" placeholder="请输入用户名">
			</div>
			<div class="form-group">
				<label for="userpwd">Password:</label>
				<input type="password" id="userpwd" class="form-control" placeholder="请输入密码">
			</div>
			<button type="button" class="btn btn-primary w-100 mt-2">登录</button>
		</form>
		<div class="d-flex justify-content-end mt-2">
			<router-link to="/register">注册</router-link>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#top_box {
		background-image: url(../assets/1.jpg);
		background-repeat: no-repeat;
	}
</style>

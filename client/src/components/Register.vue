<template>
	<div>
		<h1>Register here</h1>
		<input type="email" name="email" v-model="email" placeholder="Your email" />
		<br/>
		<input type="password" name="password" v-model="password" placeholder="Your password" />
		<br/>
		<button @click="register">Register</button>
	</div>
</template>

<script>
	import AuthenticationService from "@/services/AuthenticationService";

    export default {
		name: 'register',
		data () {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
	        async register () {
	            const response = await AuthenticationService.register({
					email: this.email,
					password: this.password
				})
				console.log(response.data)
			}
		}
	}
</script>

<style scoped>

</style>
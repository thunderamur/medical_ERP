'use strict';


const app = new Vue({
	el: '#app',
	data: {
		loginPage: true,
		registrationPage: false,
		posts: [],
	},
	methods: {
		login(){
			this.loginPage = false;
			this.registrationPage = true;
		},
		logout(){
			this.$cookies.remove('token');
			this.loginPage = true;
			this.registrationPage = false;
		},
		checkStatus(){
			if (this.$api.status >= 400) {
				this.logout();
				return false;
			} else {
				return true;
			}
		}
	},
	mounted(){
		let token = this.$cookies.get('token');
		if(typeof(token) !== undefined && token > ''){
			this.login();
		}
		this.$root.$on('login', this.login);
		this.$root.$on('logout', this.logout);
	},
	template: `
		<div>
			<login v-if="loginPage"></login>
			<registration v-if="registrationPage"></registration>
		</div>
	`,
});

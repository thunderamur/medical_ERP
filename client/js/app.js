'use strict';


const app = new Vue({
	el: '#app',
	data: {
		loginPage: true,
		registrationPage: false,
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
			if (this.$api.status > 400) this.logout();
		}
	},
	mounted(){
		let token = this.$cookies.get('token');
		if(typeof(token) !== undefined && token > ''){
			this.login();
		}
		this.$root.$on('login', this.login);
		this.$root.$on('logout', this.logout);
		this.$root.$on('checkStatus', this.checkStatus);
	},
	template: `
		<div>
			<login v-if="loginPage"></login>
			<registration v-if="registrationPage"></registration>
		</div>
	`,
});

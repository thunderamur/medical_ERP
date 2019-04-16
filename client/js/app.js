const app = new Vue({
	el: '#app',
	data: {
		token: '',
		loginPage: true,
		registrationPage: false,
	},
	methods: {
		saveToken(token){
			if (token != undefined){
				this.token = token;
				this.loginPage = false;
				this.registrationPage = true;
			};
		},
	},
	template: `
		<div>
			<login v-if="loginPage" @receive-token="saveToken"></login>
			<registration v-if="registrationPage"></registration>
		</div>
	`,
});

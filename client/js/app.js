'use strict';

const app = new Vue({
	el: '#app',
	data: {
		api: {
			'url': 'http://127.0.0.1:8000/api/v1/',
			'method': {
				'get': 'GET',
				'post': 'POST',
			},
		},
		loginPage: true,
		registrationPage: false,
	},
	methods: {
		showPage(){
			this.loginPage = false;
			this.registrationPage = true;
		},
	},
	mounted(){
		let token = this.$cookies.get('token');
		if(typeof(token) !== undefined && token > ''){
			this.showPage();
		}
		this.$root.$on('authenticated', this.showPage);
	},
	template: `
		<div>
			<login v-if="loginPage"></login>
			<registration v-if="registrationPage"></registration>
		</div>
	`,
});

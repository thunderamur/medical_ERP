const app = new Vue({
	el: '#app',
	data: {
		token: '',
	},
	methods: {
		saveToken(token){
			this.token = token;
		},
	},
});

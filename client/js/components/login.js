'use strict';

Vue.component('login', {
	data() {
		return {
			authUrl: this.$root.api.url + 'api-token-auth/',
			username: '',
			password: '',
		}
	},
	methods: {
		submit(){
			postJson(
				this.authUrl,
				{"username":this.username,"password":this.password},
				this.$root.api.method.post,
			)
			.then(data => {
				this.$cookies.set('token', data.token);
				this.$root.$emit('authenticated');
			});
		}
	},
	template: `
		<div class="col-12 col-md-4 offset-md-4 my-5">
			<div class="form-group">
				<label for="InputLogin">Имя пользователя</label>
				<input v-model="username" type="text" class="form-control" id="InputLogin" aria-describedby="emailHelp" placeholder="Введите имя пользователя">
			</div>
			<div class="form-group">
				<label for="InputPassword">Пароль</label>
				<input v-model="password" type="password" class="form-control" id="InputPassword" placeholder="Введите пароль">
			</div>
			<div class="form-check">
				<input type="checkbox" class="form-check-input" id="CheckRememberLogin">
				<label class="form-check-label" for="CheckRememberLogin">Запомнить</label>
			</div>
			<button class="btn btn-primary btn-lg my-3 w-100" @click="submit()">Войти</button>
		</div>
		`,
});

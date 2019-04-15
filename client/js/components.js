Vue.component('login', {
	data() {
		return {
			name: 'Frodo',
		}
	},
	methods: {
		postJson(url, data){
			return fetch(url, {
			  method: 'post',
			  headers: {
			    'Accept': 'application/json, text/plain, */*',
			    'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(data)
			})
				.then(result => result.json())
				.catch(error => console.log(error));
		},
		getJson(url){
			return fetch(url)
				.then(result => result.json())
				.catch(error => console.log(error));
		},
		submit(){
			console.log('submit');
			this.postJson(
				'http://127.0.0.1:8000/api-token-auth/',
				'{"username":"user3","password":"suka1234"}'
			)
			.then(data => {
				console.log(data.token);
			});
		}
	},
	template: `
		<div class="col-12 col-md-4 offset-md-4">
			<div class="form-group">
				<label for="exampleInputEmail1">Имя пользователя</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите имя пользователя">
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Пароль</label>
				<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Введите пароль">
			</div>
			<div class="form-check">
				<input type="checkbox" class="form-check-input" id="exampleCheck1">
				<label class="form-check-label" for="exampleCheck1">Запомнить</label>
			</div>
			<button class="btn btn-primary" @click="submit()">Войти</button>
		</div>
		`,
});

'use strict';


Vue.component('user-info', {
	methods: {
		logout(){
			this.$root.$emit('logout');
		},
	},
	template: `
		<div>
			<a href="#" title="" alt="">Иванов А.А.</a>
			<div>Администратор</div>
			<button class="btn btn-primary btn-sm mb-3 mt-1" @click="logout()">Выйти</button>
		</div>
		`,
});

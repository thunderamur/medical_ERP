Vue.component('login', {
	data() {
		return {
			name: 'Frodo',
		}
	},
	template: '\
		<h1><slot></slot> {{ name }} <another-component :name2="name2"></another-component></hi>'
});

Vue.component('another-component', {
	props: ['name2'],
	template: '<i>{{ name2 }}</i>'
});

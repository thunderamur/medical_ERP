'use strict';


const API_URL = 'http://127.0.0.1:8000/api/v1/';


class Api {
	constructor(apiUrl) {
		this.apiUrl = apiUrl;
		this.status = '';
		this.methods = {
			'get': 'GET',
			'post': 'POST',
		};
		this.errors = {
			'UnknownMethod': 'Запрошен неизвестный метод!',
		}
	}

	_resultJson(data){
		return data
			.then(result => {
				this.status = result.status;
				return result.json();
			})
			.catch(error => {
				console.log(error);
				return {'error': error};
			});
	}

	request(url, method, data, token=false){
		if (!this.methods.hasOwnProperty(method)) {
			throw this.errors.UnknownMethod;
		}
		method = this.methods[method];

		const headers = {};
		headers['Content-Type'] = 'application/json';
		if (token && token > '') {
			headers['Authorization'] = 'Token ' + token;
		}

		const request = {};
		request['method'] = method;
		request['headers'] = headers;

		if (method === this.methods.post) {
			request['body'] = JSON.stringify(data);
		}

		return this._resultJson(fetch(this.apiUrl + url, request));
	}

	get(url, token=false){
		const method = 'get';
		const data = {};
		return this.request(url, method, data, token);
	}

	post(url, data, token=false){
		const method = 'post';
		return this.request(url, method, data, token);
	}

}


Vue.prototype.$api = new Api(API_URL)

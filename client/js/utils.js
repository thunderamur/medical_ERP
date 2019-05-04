'use strict';

// class Api {
//
// }

function resultJson(data){
	return data
		.then(result => result.json())
		.catch(error => console.log(error));
}

function postJson(url, data, method, token=false){
	let headers = {
		'Content-Type': 'application/json',
	};
	if (token && token > '') {
		headers['Authorization'] = 'Token ' + token;
	}

	let request = {
		method: method,
		headers: headers,
	}

	if (method === 'POST') {
		request['body'] = JSON.stringify(data);
	}

	return resultJson(fetch(url, request));
}
//
// function getJson(url){
// 	return resultJson(fetch(url));
// }

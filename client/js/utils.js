function resultJson(data){
	return data
		.then(result => result.json())
		.catch(error => console.log(error));
}

function postJson(url, data){
	return resultJson(fetch(url, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}));
}

function getJson(url){
	return resultJson(fetch(url));
}

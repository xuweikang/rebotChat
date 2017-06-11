import axios from 'axios';
var qs = require('qs');


var instance = axios.create({
	headers: {'content-type': 'application/x-www-form-urlencoded'}
});

let base = 'http://localhost:8080/api/';

//export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const getDialog = params => { return instance.get(base+'/dialogue',{ params: params }); };
export const getUser= params => { return instance.get(base+'/user',{ params: params }); };
export const getRebotContent = params => { return instance.get('http://www.tuling123.com/openapi/api',{ params: params }); }



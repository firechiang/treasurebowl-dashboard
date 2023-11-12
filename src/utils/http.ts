import { useState } from 'react';
import qs from "qs";

const methodGet = 'GET';

export function useHttpGet<T extends object>(endpoint: string) {
	return useHttp<T>(endpoint, methodGet);
}

export function useHttpPost<T extends object>(endpoint: string) {
	return useHttp<T>(endpoint, 'POST');
}

export function useHttp<T extends object>(endpoint: string, method: string, { ...customConfig }: RequestInit = {}) {

	const [isLoading, setLoading] = useState<boolean>(false);
	const [resData, setResData] = useState<T>();

	const config = {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		...customConfig,
	};

	const http = (param: object) => {
		setLoading(true);
		if (config.method.toUpperCase() === methodGet) {
			endpoint += `?${qs.stringify(param)}`;
		} else {
			config.body = JSON.stringify(param || {});
		}
		window.fetch(endpoint, config).then(async (response) => {
			const data = await response.json();
			if (response.ok) {
				setResData(data);
			} else {
				return Promise.reject(data);
			}
			setLoading(false);
		});
	};
	return {
		isLoading,
		resData,
		http
	};
};
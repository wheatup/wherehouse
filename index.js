const { useState, useEffect } = require('react');

const globalData = new Map();
const listeners = new Map();

const getData = identifier => {
	return globalData.get(identifier);
};

const useData = identifier => {
	const [state, setState] = useState(globalData.get(identifier));
	if (!listeners.has(identifier))
		listeners.set(identifier, new Set());

	useEffect(() => {
		listeners.get(identifier).add(setState);
		return () => {
			listeners.get(identifier).delete(setState);
		};
	}, []);
	return state;
};

const setData = (identifier, data) => new Promise(async resolve => {
	if (typeof data === 'function')
		data = data(globalData.get(identifier));
	if (data instanceof Promise)
		data = await data;

	globalData.set(identifier, data);
	if (listeners.has(identifier))
		listeners.get(identifier).forEach(setState => setState(data));

	setTimeout(() => resolve(), 0);
});


const init = (data) => Object.entries(data).forEach(([key, value]) => globalData.set(key, value));

const addData = (key, value) => {
	globalData.set(key, value);
}

if (typeof module !== 'undefined') {
	module.exports = {
		init,
		addData,
		useData,
		setData,
		getData
	};
}
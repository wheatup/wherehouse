const { useState, useEffect } = require('react');

const globalData = {};
const listeners = {};

const getData = identifier => {
	return globalData[identifier];
};

const useData = identifier => {
	const [state, setState] = useState(globalData[identifier]);
	if (!listeners[identifier])
		listeners[identifier] = new Set();

	useEffect(() => {
		listeners[identifier].add(setState);
		return () => {
			listeners[identifier].delete(setState);
		};
	}, []);
	return state;
};

const setData = (identifier, data) => new Promise(async resolve => {
	if (typeof data === 'function')
		data = data(globalData[identifier]);
	if (data instanceof Promise)
		data = await data;

	globalData[identifier] = data;
	if (listeners[identifier])
		listeners[identifier].forEach(setState => setState(data));

	setTimeout(() => resolve(), 0);
});


const init = data => Object.assign(globalData, data);

const addData = (key, value) => {
	globalData[key] = value;
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
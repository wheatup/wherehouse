const { useState, useEffect } = require('react');
const globalData = {
	
};

const listeners = {

};

const states = {

};

const getState = identifier => {
	if (states[identifier]) {
		return states[identifier];
	} else {
		const states = useState(globalData[identifier]);
		states[identifier] = states;
		return states;
	}
}

const getData = identifier => {
	return globalData[identifier];
};

const useData = identifier => {
	const [state, setState] = getState(identifier);
	if (!listeners[identifier]) {
		listeners[identifier] = new Set();
	}
	listeners[identifier].add(setState);
	useEffect(() => {
		return () => {
			listeners[identifier].delete(setState);
		};
	}, []);
	return state;
};

const setData = async (identifier, data) => {
	let result = data;
	if (typeof data === 'function') {
		result = await data(globalData[identifier]);
	}
	globalData[identifier] = result;

	if (listeners[identifier]) {
		listeners[identifier].forEach(setState => setState(data));
	}
}

const init = (data) => {
	Object.assign(globalData, data);
}

exports.module = {
	init,
	useData,
	setData,
	getData
};
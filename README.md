# Wherehouse

Redux sucks.

So I made a lightweight global state management solution using react hooks.

Should not be used by anyone except myself.

### Install

```
$ npm i wherehouse
```

### Usage

> App.js

```javascript
import React from 'react';
import wherehouse, { setData, useData } from 'wherehouse';

// Initialize the store
wherehouse.init({
	NAME: 'Alice',
	AGE: 18,
});

function App() {
	// Use a data from the store
	const age = useData('AGE');

	// Update a data from the store
	const addAge = amount => setData('AGE', age + amount);

	return (
		<div className="app">
			<User />
			<button onClick={() => addAge(1)} >Age+1</button>
		</div>
	);
}

const User = props => {
	// Use data from store
	const name = useData('NAME');
	const age = useData('AGE');

	return (
		<div>
			<h2>Name: {name}</h2>
			<h2>Age: {age}</h2>
		</div>
	);
}
```
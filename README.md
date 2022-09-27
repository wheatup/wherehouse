# udf-state

Redux sucks.

So I made a lightweight global state management solution using react hooks.

Should not be used by anyone except myself.

### Install

```
$ npm i https://github.com/wheatup/wherehouse
```

### Install(Obsolete)

```
$ npm i udf-state
```


### Usage

> App.js

```javascript
import React from 'react';
import { init, setData } from 'udf-state';
import User from './components/User';

// Initialize the store
init({
	NAME: 'Alice',
	AGE: 18,
});

function App() {
	// Update a data from the store
	// While this updates, the `age` in `User` component also updates
	const addAge = () => setData('AGE', age => age + 1);

	return (
		<div className="app">
			<User />
			<button onClick={addAge}>Age+1</button>
		</div>
	);
}

export default App;
```

> User.js
```javascript
import React from 'react';

import { useData } from 'udf-state';

const User = () => {
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

export default User;
```

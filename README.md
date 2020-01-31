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
import React, { useCallback } from 'react';
import wherehouse from 'wherehouse';

const NAME = Symbol();
const AGE = Symbol();

wherehouse.init({
	[NAME]: 'Alice',
	[AGE]: 18,
});

function App() {
	// A global data associated with the key "AGE", a hook
	const age = wherehouse.useData(AGE);
	
	const updateAge = useCallback(() => {
		// Get a snapshot of a value, not a hook
		const name = wherehouse.getData(NAME);

		// Update the value and the view
		wherehouse.setData(AGE, age + 1);
		
		console.log(`${name}'s age has been set to: ${age + 1}`);
	}, [age]);

	return (
		<div className="app">
			<span onClick={updateAge}>{age}</span>
		</div>
	);
}

export default App;

```
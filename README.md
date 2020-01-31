# Wherehouse

Redux sucks.

So I made a lightweight global state management solution associated with react hooks.


### Install

```
npm i wherehouse
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
	[AGE]: 18
});

function App() {
	// Use a data by key
	const age = wherehouse.useData(AGE);

	const updateAge = useCallback(() => {
		// Set a data by key
		wherehouse.setData(AGE, age + 1);
	}, [age]);

	return (
		<div onClick={updateAge}>{age}</div>
	);
}

export default App;
```
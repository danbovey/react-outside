React Outside
=======================

[![npm](https://img.shields.io/npm/dt/react-outside.svg?style=flat-square)](https://www.npmjs.com/package/react-outside)
[![React Version](https://img.shields.io/badge/React-%5E15.0.1-blue.svg?style=flat-square)](https://www.npmjs.com/package/react)
[![npm](https://img.shields.io/npm/v/react-outside.svg?style=flat-square)](https://www.npmjs.com/package/react-outside)
[![npm](https://img.shields.io/npm/l/react-outside.svg?style=flat-square)](https://github.com/danbovey/react-outside/blob/master/LICENSE)

A higher order component for React for listening to clicks outside of the component. Supports classes and decorators.

## Installation

```
  npm i react-outside
```

## How to use

### Config

```js
/**
 * @param {Object} config Configuration for the events.
 * @return {Component}
 */
 ```

### Usage

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import clickOutside from 'react-outside';

@clickOutside(['mousedown']) // `click` is the default handler but you can set different event names
export default class DropdownMenu extends Component {
	handleClickOutside(e) {
		// Handle the event
	}

	render() {
		return (
			<ul className="dropdown-menu">
				<li>List items...</li>
			</ul>
		);
	}
}
```
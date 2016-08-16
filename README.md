React Outside
=======================

[![npm](https://img.shields.io/npm/dt/react-outside.svg?style=flat-square)](https://www.npmjs.com/package/react-outside)
[![React Version](https://img.shields.io/badge/React-%5E15.0.1-blue.svg?style=flat-square)](https://www.npmjs.com/package/react)
[![npm](https://img.shields.io/npm/v/react-outside.svg?style=flat-square)](https://www.npmjs.com/package/react-outside)
[![npm](https://img.shields.io/npm/l/react-outside.svg?style=flat-square)](https://github.com/danbovey/react-outside/blob/master/LICENSE)

Wraps a react component and listens for clicks outside of the element.

Can be used as a [higher-order component](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/#property-initializers) or as an [ES7 class decorator](https://github.com/wycats/javascript-decorators)

## Installation

```
  npm i react-outside
```

## API

### clickOutside([config])(MyComponent)

**Parameters**

-   `config` **object**
    -   `config.events` **array**

## Examples

```js
// ES7
import React from 'react';
import clickOutside from 'react-outside';

@clickOutside() // Enhanced component
class MyComponent extends React.Component {
    handleClickOutside() {
        // Handle the event
    }
    render() {
        <ul className="dropdown-menu">
            <li>List items...</li>
        </ul>
    }
}

export default MyComponent; // Component is exported with `clickOutside` decorator
```

```js
// ES5
var React = require('react');
var clickOutside = require('react-outside');

class MyComponent extends React.Component {
    handleClickOutside() {
        // Handle the event
    }
    render() {
        <ul className="dropdown-menu">
            <li>List items...</li>
        </ul>
    }
}

export default clickOutside()(MyComponent); // Enhanced component
```
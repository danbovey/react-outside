import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * Wraps a react component and listens for clicks outside of the element.
 * Can be used as a
 * [higher-order component](http://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)
 * or as an [ES7 class decorator](https://github.com/wycats/javascript-decorators)
 *
 * @param {Object} config Configuration for the events.
 * @return {Component}
 *
 * @example
 * // ES7
 * import React from 'react';
 * import clickOutside from 'react-outside';
 *
 * @clickOutside() // Enhanced component
 * class MyComponent extends React.Component {
 *     handleClickOutside() {
 *         // Handle the event
 *     }
 *     render() {
 *         <ul className="dropdown-menu">
 *             <li>List items...</li>
 *         </ul>
 *     }
 * }
 *
 * export default MyComponent; // Component is exported with `clickOutside` decorator
 *
 * @example
 * // ES5
 * var React = require('react');
 * var clickOutside = require('react-outside');
 *
 * class MyComponent extends React.Component {
 *     handleClickOutside() {
 *         // Handle the event
 *     }
 *     render() {
 *         <ul className="dropdown-menu">
 *             <li>List items...</li>
 *         </ul>
 *     }
 * }
 *
 * export default clickOutside()(MyComponent); // Enhanced component
 */
function clickOutside(config) {
    config = Object.assign({
        events: ['click']
    }, config);

    return (Target) => {
        return class ClickOutside extends Component {
            constructor(props) {
                super(props);

                this.handleClickOutside = this.handleClickOutside.bind(this);
            }

            componentDidMount() {
                config.events.forEach(eventName => {
                    document.addEventListener(eventName, this.handleClickOutside, true);
                });
            }

            componentWillUnmount() {
                config.events.forEach(eventName => {
                    document.removeEventListener(eventName, this.handleClickOutside, true);
                });
            }

            handleClickOutside(e) {
                const node = ReactDOM.findDOMNode(this);
                if((!node || !node.contains(e.target)) && typeof this.refs.target.handleClickOutside === 'function') {
                    this.refs.target.handleClickOutside(e);
                }
            }

            render() {
                return <Target {...this.props} ref="target" />;
            }
        };
    };
}

export default clickOutside;

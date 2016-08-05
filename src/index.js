import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * @param {Object} config Configuration for the events.
 * @return {Component}
 */
function clickOutside(config) {
    config = Object.assign({
        events: ['click']
    }, config);

    return function(Target) {
        return class ClickOutside extends Component {
            componentDidMount() {
                config.events.forEach(eventName => {
                    document.addEventListener(eventName, this.handleClickOutside.bind(this), true);
                });
            }

            componentWillUnmount() {
                config.events.forEach(eventName => {
                    document.removeEventListener(eventName, this.handleClickOutside.bind(this), true);
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

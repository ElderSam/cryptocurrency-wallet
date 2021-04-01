import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {
    render() {
        return(
            <header className="App-header">
                <p>
                Cryptocurrency Wallet
                </p>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        )
    }
}
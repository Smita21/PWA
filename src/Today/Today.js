import React, { Component } from 'react';
import './Today.css'
import axios from 'axios'
import Pusher from 'pusher-js'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Today extends Component {
    // Adds a class constructor that assigns the initial state values:
    constructor() {
        super();
        this.state = {
            btcprice: '',
            ltcprice: '',
            ethprice: ''
        };
    }
    // This is called when an instance of a component is being created and inserted into the DOM.
    componentWillMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
            .then(response => {
                // We set the latest prices in the state to the prices gotten from Cryptocurrency.
                this.setState({ btcprice: response.data.BTC.USD });
                this.setState({ ethprice: response.data.ETH.USD });
                this.setState({ ltcprice: response.data.LTC.USD });
            })
            // Catch any error here
            .catch(error => {
                console.log(error)
            })
    }
    // The render method contains the JSX code which will be compiled to HTML.
    render() {
        return (
            <div className="today--section container">
                <h2>Dashboard Page</h2>
                <h1>Progressive Web Apps are web apps that use emerging web browser APIs and features along with traditional progressive enhancement strategy to bring a native app-like user experience to cross-platform web applications. Progressive Web Apps are a useful design pattern, though they aren't a formalized standard. PWA can be thought of as similar to AJAX or other similar patterns that encompass a set of application attributes, including use of specific web technologies and techniques. This set of docs tells you all you need to know about them.</h1>

                <div className="columns today--section__box">
                    <div className="column btc--section">
                        <h5>${this.state.btcprice}</h5>
                        <p>1 BTC</p>
                    </div>
                    <div className="column eth--section">
                        <h5>${this.state.ethprice}</h5>
                        <p>1 ETH</p>
                    </div>

                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 LATC</p>
                    </div>
                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 ATC</p>
                    </div>
                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 BTC</p>
                    </div>

                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>5 RUPEE </p>
                    </div>
                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 CTC</p>
                    </div>


                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 EURO</p>
                    </div>
                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 DOLLAR</p>
                    </div>

                </div>
                <h1>Progressive Web Apps are web apps that use emerging web browser APIs and features along with traditional progressive enhancement strategy to bring a native app-like user experience to cross-platform web applications. Progressive Web Apps are a useful design pattern, though they aren't a formalized standard. PWA can be thought of as similar to AJAX or other similar patterns that encompass a set of application attributes, including use of specific web technologies and techniques. This set of docs tells you all you need to know about them.</h1>

                <Link className="button" to="/">Back to home</Link>
            </div>

        )
    }
}

export default Today;
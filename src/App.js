// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './App.css';
// Import the Today component to be used below
import Today from './Today/Today'
// Import the History component to be used below

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="topheader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">PusherCoins</span>
              </div>
              <div className="navbar-end">
                <a className="navbar-item" href="https://pusher.com" target="_blank" rel="noopener noreferrer">Pusher.com</a>
              </div>
            </nav>
          </header>
        </div>
        <section className="results--section">
          <div className="container">
            <h1>PusherCoins is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
            <h1>The web is an incredible platform. Its mix of ubiquity across devices and operating systems.</h1>

            <h1>Native applications, are known for being incredibly rich and reliable. </h1>

            <h1>They work regardless of network connection.</h1>

            <h1>They launch in their own standalone experience. </h1>
            <h1> They can read and write files from the local file system, access hardware connected via USB, serial or bluetooth, and even interact with data stored on your device, like contacts and calendar events.</h1>

            <h1>Native applications feel like part of the device they run on.</h1>
            <h1>Progressive Web Apps are web applications that have been designed so they are capable, reliable, and installable.</h1>
            <h1>Progressive Web Apps are web applications that have been designed so they are capable, reliable, and installable.</h1>


          </div>
          <div className="results--section__inner">
            <Today />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
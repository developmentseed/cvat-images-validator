import React, { Component } from 'react';

export default class componentName extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <ul className="header_navigation" role="navigation">
            <li className="header_navigation_collased_icon">
            </li>
            <li className="header_navigation_title">
              <h1>CVAT imagen validator</h1>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

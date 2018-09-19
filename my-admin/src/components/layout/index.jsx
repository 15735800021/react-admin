import React from 'react';

import NavTop from '../top_nav/index';
import NavSide from '../side-nav/index';

import './theme.css';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
                <NavTop/>
                <NavSide/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
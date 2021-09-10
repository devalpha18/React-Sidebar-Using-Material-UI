import React, { PureComponent } from 'react';
import MainPage from '../component/MainPage';

class MainPageContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openSideBar: false
        }
    }

    toggleSideBar = (e) => {
        this.setState({
            openSideBar: !this.state.openSideBar
        });
    }

    render() {
        return (<MainPage openSideBar={this.state.openSideBar} toggleHandler={this.toggleSideBar} />);
    }
}

export default MainPageContainer;
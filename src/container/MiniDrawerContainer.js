import React from 'react';
import MiniDrawer from '../component/MiniDrawer';

class MiniDrawerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleClick = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { openSideBar, sideBarClick } = this.props;
        return (<MiniDrawer subMenuOpen={this.state.isOpen} onClickHandler={this.handleClick}
            openSideBar={openSideBar} handlerSideBar={sideBarClick} />);
    }
}

export default MiniDrawerContainer;
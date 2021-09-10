import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { PropTypes } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

function ListItemLink(props) {
    const { to, open, menu, menuText,icon,...other } = props;
    
    return (
        <ListItem button component={RouterLink} to={to} {...other} >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={menuText} />
            {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItem>
    );
}

ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

export default ListItemLink;


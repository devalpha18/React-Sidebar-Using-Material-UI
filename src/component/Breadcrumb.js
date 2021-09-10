import React from "react";
import clsx from 'clsx';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from '@material-ui/core/Link';
import { staticMenu } from '../static/Menus';
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from '../static/MiniDrawerStyles';

const PureBreadcrumbs = (({ breadcrumbs }) => {
    const classes = useStyles();
    return (
        <>
            <div className={clsx(classes.breadCrumbBar)} >
                <Paper elevation={0} className={classes.paper}>
                    <Breadcrumbs
                        separator={< NavigateNextIcon fontSize="small" />}
                        aria-label="Breadcrumb">
                        {breadcrumbs.map(({
                            breadcrumb,
                            match
                        }, index) => (
                                <div key={match.url}>
                                    {console.log(match.url)}
                                    <Link component={RouterLink} color="inherit" to={match.url}>{breadcrumb}</Link>
                                </div>
                            ))}
                    </Breadcrumbs>
                </Paper>
            </div>
        </>
    )
})

export default withBreadcrumbs(staticMenu)(PureBreadcrumbs);
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Project from '../Project';
import './ProjectList.scss';

import { Grid, CircularProgress, withStyles } from '@material-ui/core';


const styles = theme => ({
    root: {
        width: '75%',
        margin: '0 auto',
    },
    progress: {
        width: 30,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
});



const ProjectList = ({ fetching, projects, fetchProjectList, classes }) => {

    useEffect(() => { fetchProjectList() }, [fetchProjectList]);

    return (
        <div className="gridContainer">
            {fetching && <div><CircularProgress className={classes.progress} /></div>}
            <Grid container spacing={1} className={classes.root}>
                {!fetching && projects.length > 0 && projects.map(t => (
                    <Grid item xs={4} spacing={3}>
                        <Project key={t.id} {...t} />
                    </Grid>
                ))}
                <Grid item xs={4} spacing={3}>
                    <Project key={0} />
                </Grid>
            </Grid>
        </div>

    )
}

export default withStyles(styles)(ProjectList);

Project.propTypes = {
    projects: PropTypes.object,
    fetchProjectList: PropTypes.func
}
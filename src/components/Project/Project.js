import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Project.scss';
import { makeStyles, Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { DialogForm } from './DialogForm';
import ProjectAddOrEdit from '../ProjectAddOrEdit';


const useStyles = makeStyles({
    card: {
        minWidth: 150,
        maxWidth: 300,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const Project = ({ id, name, description, active, createdDate, tags }) => {

    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const classes = useStyles();

    return (
        <>
            <DialogForm open={editDialogOpen} handleClose={() => setEditDialogOpen(false)}>
                <ProjectAddOrEdit id={id} />
            </DialogForm>
            {
                id && <Card className={classes.card} key={'card_' + id}>
                    <CardContent key={'cardContent_' + id} onClick={() => alert('Selected! Routing to the cards!')}>
                        <Typography variant="body2">
                            <div key={'id_' + id}>ID:{id}</div>
                            <div key={'name_' + id}>Name:{name}</div>
                            <div key={'desc_' + id}>Description:{description}</div>
                            <div key={'act_' + id}>Active:{active}</div>
                            <div key={'date_' + id}>CreatedDate:{createdDate}</div>
                            <div key={'tags_' + id}>Tags:{tags}</div>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" size="small" key={'edit_' + id} onClick={(e) => { e.preventDefault(); setEditDialogOpen(true); }}>Edit</Button>
                    </CardActions>
                </Card>

            }
            {
                !id && <Card className={classes.card} key={'card_' + id}>
                    <CardContent key={'cardContent_' + id} onClick={(e) => { e.preventDefault(); setEditDialogOpen(true); }}>
                        <AddIcon color="primary" fontSize="large" />
                    </CardContent>
                </Card>

            }
        </>)
}

Project.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    active: PropTypes.bool,
    createdDate: PropTypes.string,
    tags: PropTypes.string
}
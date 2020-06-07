import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';

import { DeleteOutlined } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';

import { FormDialog, ConfirmDialog } from './../Core';

import './Project.scss';
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

export const Project = ({
  id,
  name,
  description,
  active,
  createdDate,
  tags,
  resetEditDialog,
  deleteProject,
  onChange,
}) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    resetEditDialog();
  }, []);

  const handleClose = () => {
    setEditDialogOpen(false);
    resetEditDialog();
    onChange();
  };
  return (
    <>
      <FormDialog open={editDialogOpen} handleClose={handleClose}>
        <ProjectAddOrEdit id={id} onSave={handleClose} />
      </FormDialog>
      {id && (
        <Card className={classes.card} key={'card_' + id}>
          <CardContent
            key={'cardContent_' + id}
            onClick={() => alert('Selected! Routing to the cards!')}
          >
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
            <Button
              color="primary"
              size="small"
              key={'edit_' + id}
              onClick={(e) => {
                e.preventDefault();
                setEditDialogOpen(true);
              }}
            >
              Edit
            </Button>
            <ConfirmDialog
              open={deleteDialogOpen}
              handleCancel={() => {
                setDeleteDialogOpen(false);
              }}
              handleOK={() => {
                deleteProject(id);
                onChange();
              }}
            >
              <p>Do you really want to delete this project?</p>
            </ConfirmDialog>

            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <DeleteOutlined onClick={() => setDeleteDialogOpen(true)} />
            </IconButton>
          </CardActions>
        </Card>
      )}
      {!id && (
        <Card className={classes.card} key={'card_' + id}>
          <CardContent
            key={'cardContent_' + id}
            onClick={(e) => {
              e.preventDefault();
              setEditDialogOpen(true);
            }}
          >
            <AddIcon color="primary" fontSize="large" />
          </CardContent>
        </Card>
      )}
    </>
  );
};

Project.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  active: PropTypes.bool,
  createdDate: PropTypes.string,
  tags: PropTypes.string,
};

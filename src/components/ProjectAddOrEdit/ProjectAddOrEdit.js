import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MemoButton } from '../Core';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

const EditProjectSchema = yup.object().shape({
  name: yup.string().required('This field is required.'),
  description: yup.string().required('This field is required.'),
  createdDate: yup.string().required('This field is required.'),
  active: yup
    .string()
    .min(6, 'active is too short.')
    .max(20, 'active is too long.')
    .required('This field is required.'),
});

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const ProjectAddOrEdit = ({
  id,
  fetchProjectById,
  createProject,
  updateProject,
  onSave,
  ...props
}) => {
  const edit = id;

  const { project, updating } = props;

  const title = edit ? 'Edit Project' : 'Create Project';

  const classes = useStyles();

  useEffect(() => {
    if (edit) {
      fetchProjectById(id);
    }
  }, [edit, fetchProjectById, id]);

  const onSubmit = (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    if (edit) {
      updateProject(values);
    } else {
      createProject(values);
    }
    resetForm();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Formik
          initialValues={project}
          enableReinitialize
          validationSchema={EditProjectSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={errors.name && touched.name}
                    autoComplete="pname"
                    name="name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="name"
                    label="Project Name"
                    autoFocus
                    value={values.name || ''}
                    helperText={
                      errors.name && touched.name ? errors.name : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.description && touched.description}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="description"
                    label="Description"
                    name="description"
                    value={values.description || ''}
                    autoComplete="lname"
                    helperText={
                      errors.description && touched.description
                        ? errors.description
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.createdDate && touched.createdDate}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="createdDate"
                    label="Created Date"
                    name="createdDate"
                    value={values.createdDate || ''}
                    autoComplete="createdDate"
                    helperText={
                      errors.createdDate && touched.createdDate
                        ? errors.createdDate
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.active && touched.active}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    name="active"
                    value={values.active || ''}
                    label="Active"
                    type="active"
                    id="active"
                    autoComplete="current-active"
                    helperText={
                      errors.active && touched.active ? errors.active : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.tags && touched.tags}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    name="tags"
                    value={values.tags || ''}
                    label="Tags"
                    type="tags"
                    id="tags"
                    autoComplete="current-tags"
                    helperText={
                      errors.tags && touched.tags ? errors.tags : null
                    }
                  />
                </Grid>
              </Grid>
              <MemoButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                text="Save"
                loadingText="Saving..."
                loading={updating}
                onLoadingFinished={onSave}
              />
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

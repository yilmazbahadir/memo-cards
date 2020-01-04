import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const ProjectAddOrEdit = ({ id, fetchProjectById, saveProject }) => {

    //let project = fetchProjectById(id);
    const handleSubmit = () => alert('submitted!');
    const defaultFormState = {
        email: 'bahadir@openrise.co.uk',
        password: '12345',
        confirmPassword: '12345'
    }

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={defaultFormState}
        >
            {() => (
                <Form>
                    <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <ErrorMessage
                        name="email"
                        component="div"
                    />
                    <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <ErrorMessage
                        name="password"
                        component="div"
                    />
                    <Field
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                    />
                    <ErrorMessage
                        name="confirmPassword"
                        component="div"
                    />
                    <button>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
        // <div>
        //     <div>ID:</div><div>{id}</div>
        //     <div>Name:</div><div>{name}</div>
        //     <div>Description:</div><div>{description}</div>
        //     <div>Active:</div><div>{active}</div>
        //     <div>CreatedDate:</div><div>{createdDate}</div>
        //     <div>Tags:</div><div>{tags}</div>
        // </div>
    )
}

ProjectAddOrEdit.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    active: PropTypes.bool,
    createdDate: PropTypes.string,
    tags: PropTypes.string
}


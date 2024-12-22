import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function RegistrationForm() {
  const handleSubmit = (values) => {
    // Perform form submission logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Username:
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />
        </label>
        <label>
          Email:
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password:
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;


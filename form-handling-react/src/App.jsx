import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import formikForm from './components/formikForm';

function App() {
  return (
    <div>
      <h1>Form Handling with React</h1>
      <h2>Using Controlled Components:</h2>
      <RegistrationForm />
      <h2>Using Formik:</h2>
      <formikForm />
    </div>
  );
}

export default App;

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Registration_Form from '../components/forms/registration_form';


const RegistrationPage = () => {
  return (
    <div>
        <Header/>
        <main style={{'minHeight': '70vh'}}>
          <h1> Регистрация </h1>
          <Registration_Form/>
        </main>

        <Footer/>
    </div>
  );
};

export default RegistrationPage;

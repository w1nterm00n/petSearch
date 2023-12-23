import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Registration_Form from '../components/forms/registration_form';
import Login_Form from '../components/forms/login_form';


const AuthPage = () => {
  return (
    <div>
        <Header/>
        <main style={{'minHeight': '70vh'}}>
          <h1> Вход в личный кабинет </h1>
          <Login_Form/>
        </main>
        <Footer/>
    </div>
  );
};

export default AuthPage;

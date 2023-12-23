import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Add_Advert from '../components/forms/add_advert';


const AddAdvertPage = () => {
  return (
    <div>
        <Header/>
        <main style={{'minHeight': '70vh'}}>
        <h1>Добавление объявлений</h1>
            <Add_Advert/>
        </main>
        
        <Footer/>
    </div>
  );
};

export default AddAdvertPage;

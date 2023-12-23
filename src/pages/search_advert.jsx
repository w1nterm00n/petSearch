import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Search_Advert from '../components/forms/search_advert';

const SearchAdvert = () => {
  return (
    <div>
        <Header/>
        <main style={{'minHeight': '70vh'}}>
          <h1>Поиск по объявлениям</h1>
          <Search_Advert/>
        </main>

        <Footer/>
    </div>
  );
};

export default SearchAdvert;

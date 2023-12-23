import React, { useEffect, useState } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Slider from '../components/slider';
import Subscribe_Form from '../components/forms/subscribe_form';
import AdvertCard from '../components/cards/advert_card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

const Main = () => {
  const [petsData, setPetsData] = useState(null);

  useEffect(() => {
    const fetchPetsInfo = async () => {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };

      try {
        const result = await fetch("https://pets.сделай.site/api/pets", requestOptions);

        if (result.status === 200) {
          console.log("good response");
          const pets = await result.json();
          setPetsData(pets);   
          console.log(pets);      
        } else {
          console.log("bad response");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    // Вызываем функцию fetchPetsInfo только при монтировании компонента
    fetchPetsInfo();
  }, []);

  if (!petsData) {
    return null; // или другой вариант загрузки данных
  }

  return (
    <div>
        <Header/>
        <main>
          <h1>Найденные животные</h1>
          <Slider/>
          <div className='cardsContainer'>

          {petsData.data.orders.map((pet, index) => (
          <AdvertCard
            key={index}
            photos = {pet.photos}
            kind={pet.kind}
            name={pet.name}
            phone={pet.phone}
            district={pet.district}
            description={pet.description}
            mark={pet.mark}
            date={pet.date}
          />
          ))}
          </div>
          <Subscribe_Form/>
        </main>
        
        <Footer/>
    </div>
  );
};

export default Main;

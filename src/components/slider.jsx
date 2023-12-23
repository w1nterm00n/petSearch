import React, { useEffect, useState } from "react";
import Slide from "./cards/slide";

//сделать запрос который получит данные с сервера которые пойдут в слайдер +
//как-то отобразить их в консоли +
//впихнуть эти данные в слайды

const Slider = () => {
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
        const result = await fetch("https://pets.сделай.site/api/pets/slider", requestOptions);

        if (result.status === 200) {
          const pets = await result.json();
          setPetsData(pets);      
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
      <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={4}
          aria-label="Slide 5"
        />
      </div>
      <div className="carousel-inner" >

        {petsData.data.pets.map((pet, index) => (
          <Slide
            key={index}
            kind={pet.kind}
            image={pet.image}
            description={pet.description}
            className={index === 0 ? "active" : ""}
          />
        ))}

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
    
    
    );
};

export default Slider;
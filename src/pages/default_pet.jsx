import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import locationIcon from '../img/location_icon.png';
import CalendarIcon from '../img/calendar.png'

const DefaultPetPage = () => {
  return (
    <div>
        <Header/>
        <main style={{'minHeight': '70vh'}}>
        <>
            <h3 style={{ textAlign: "center", margin: "40px 0" }}>Название объявления</h3>
            <div className="card mb-3" style={{ width: "fit-content", margin: "0 auto" }}>
                <div className="row g-0">
                <div className="col-md-4">
                    <img
                    src="https://files.yappe.in/place/small/zaara-kittens-the-pets-shop-2741260.webp"
                    className="img-fluid rounded-start"
                    alt="brown cat"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title advertType">Найден / Потерян</h5>
                    <p className="card-text advertDescription"> Описание: </p>
                    <p className="card-text advertChipNum"> Номер чипа (если есть): </p>
                    <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
                        <img src={locationIcon} alt="location" />
                        <p className="card-text advertDescription"> Город, район </p>
                    </div>
                    <div style={{ display: "flex", gap: 20 }}>
                        <img src={CalendarIcon} alt="date" />
                        <p className="card-text advertDescription"> Дата </p>
                    </div>
                    <small className="text-body-secondary">
                        <a href="#!">Автор публикации </a>
                    </small>
                    </div>
                </div>
                </div>
            </div>
            </>
        </main>
        <Footer/>
    </div>
  );
};

export default DefaultPetPage;

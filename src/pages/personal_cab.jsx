import React, { useEffect, useState } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import PersonInfo from '../components/personal_cabinet/person_info';
import PersonStatistics from '../components/personal_cabinet/person_statistics';
import UserAdvertCard from '../components/cards/user_advert_card';



const PersonalCab = () => {
  const [personData, setPersonData] = useState(null);
  let token = localStorage.getItem("token");
  
  let exitCabinet = function(){
    localStorage.removeItem("token");
    token = localStorage.getItem("token");
  }
  
  useEffect(() => {
    if (token) {
      const fetchUserInfo = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let requestOptions = {
          method: 'GET',
          credentials: 'same-origin',
          headers: myHeaders,
          redirect: 'follow'
        };

        try {
          const result = await fetch("https://pets.сделай.site/api/users", requestOptions);

          if (result.status === 200) {
            console.log("good response");
            const data = await result.json();
            setPersonData(data);
            const countDays = daysSinceDate(data.registrationDate);
            setPersonData({ ...data, countDays });
          } else {
            console.log("bad response");
          }
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };

      fetchUserInfo();
    }
  }, [token]);

  function daysSinceDate(inputDate) {
    // Преобразуем входную дату в объект Date
    const inputDateTime = new Date(`${inputDate}T00:00:00Z`);
  
    // Получаем текущую дату и время
    const now = new Date();
  
    // Разница в миллисекундах между текущей и входной датой
    const timeDiff = now - inputDateTime;
  
    // Переводим миллисекунды в дни
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    return daysDiff;
  }

  if (token) {
    return (
      <div>
          <Header/>
          <main style={{'minHeight': '70vh'}}>
            <h1>Личный кабинет</h1>
            <button className="btn btn-primary" style={{ marginLeft: "100px"}} onClick={exitCabinet}>
              <Link to={'/'} className="nav-link">
                  Выйти из кабинета
              </Link>
            </button>
          <div className="register_div">
          <PersonInfo
            name={personData ? personData.name : ""}
            email={personData ? personData.email : ""}
            phone={personData ? personData.phone : ""}
            id={personData ? personData.id : ""}
          />
          <PersonStatistics
            countOrder={personData ? personData.countOrder : ""}
            countPets={personData ? personData.countPets : ""}
            countDays={personData ? personData.countDays : ""}
          />

    <h4 style={{ textAlign: "center", margin: "40px 0" }}>
      Объявления пользователя
    </h4>
    <div style={{ display: "flex", justifyContent: "end" }}>
      <button className="btn btn-primary" style={{ margin: "0 100px 30px 0" }}>
        Добавить объявление
      </button>
    </div>

            <div className='card-group userAdverts'>
              <UserAdvertCard photo="https://i.pinimg.com/474x/ea/24/c9/ea24c9cc8bcabe8bf87645e88d3bb8ff.jpg"
              advertType="Найден" name="кот"/>

              <UserAdvertCard photo="https://i.pinimg.com/474x/ea/24/c9/ea24c9cc8bcabe8bf87645e88d3bb8ff.jpg"
              advertType="Найден" name="кот"/>
            </div>
          </div>
          </main>
          <Footer/>
      </div>
    );
  } else {
    return (
      <div>
          <Header/>
          <main style={{'minHeight': '70vh'}}>
            <h1>Личный кабинет</h1>

          <div className="not_register_div">
            <p>Вы не авторизованы!</p>
            <div className="authorization">
              <Link to={'/registration_page'} className="nav-link">
                Регистрация
              </Link>
              <Link to={'/auth_page'} className="nav-link">
                Вход
              </Link>
            </div>
          </div>

          </main>
          <Footer/>
      </div>
    );
  };
};

export default PersonalCab;


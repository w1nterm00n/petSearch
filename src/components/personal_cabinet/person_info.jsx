import React, { useRef, useState } from "react";
import { json } from "react-router-dom";
import change_icon from '../../change_icon.png'

const PersonInfo = (props) => {
    let token = localStorage.getItem("token");
    function refreshPage() {
        window.location.reload(false);
    }
    
    //ИЗМЕНЕНИЕ ТЕЛЕФОНА
    let [phone, setPhone] = useState('');
    let changePhoneForm =useRef()
    let changePhone = function(e){
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);


        console.log("change phone function");
        var raw = JSON.stringify(phone);
        console.log("new phone: " + raw);

        let requestOptions = {
            method: 'PATCH',
            body: raw,
            headers: myHeaders,
            redirect: 'follow'
        };

       fetch("https://pets.сделай.site/api/users/phone", requestOptions)
       .then(response => response.status)
       .then (result => {
            if (result == 200) {
                refreshPage();
            } else {
                alert("Ошибка. ");
            }
       })
  
    }
    const showPhoneForm = (e) => {
        e.preventDefault();
        changePhoneForm.current.classList.remove('d-none');
    };

    
    //ИЗМЕНЕНИЕ ТЕЛЕФОНА


    //ИЗМЕНЕНИЕ ПОЧТЫ
    let [email, setMail] = useState('');
    let changeMailForm =useRef()

    const showMailForm = (e) => {
        e.preventDefault();
        changeMailForm.current.classList.remove('d-none');
    };
    let changeMail = function(e) {
        e.preventDefault();
        var raw = JSON.stringify(email);
        console.log("new mail: " + raw);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let requestOptions = {
            method: 'PATCH',
            body: raw,
            headers: myHeaders,
            redirect: 'follow'
        };

       fetch("https://pets.сделай.site/api/users/email", requestOptions)
       .then(response => response.status)
       .then (result => {
            if (result == 200) {
                refreshPage();
            } else {
                alert("Ошибка. ");
            }
       })
    }
    //ИЗМЕНЕНИЕ ПОЧТЫ

    return (
        <div style={{marginTop: 40}}>
            <div className="card personalCabinetCard" style={{ width: "18rem" }}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Имя: {props.name} </li>
                <li className="list-group-item">Почта: {props.email}</li> 
                <button className="changeSmthBtn"><img src={change_icon} alt="change icon" onClick={showMailForm}/></button>
                <li className="list-group-item">Номер телефона: {props.phone}</li>
                 <button className="changeSmthBtn" onClick={showPhoneForm}><img src={change_icon} alt="change icon" /></button>

                
                <form id="changePhoneForm" className="d-none changeSmthForm"
                ref={changePhoneForm}  onSubmit={changePhone}
                >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                        Введите новый телефон (должен содержать 11 цифр)
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        pattern="[0-9]{11}"
                        onChange={(e)=> setPhone({...phone, phone: e.target.value})}
                        required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Изменить
                    </button>
                </form>

                <form id="changeMailForm" className="changeSmthForm d-none"
                ref={changeMailForm}  onSubmit={changeMail}
                >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                        Введите новую почту
                        </label>
                        <input
                        type="email"
                        aria-describedby="emailHelp"
                        className="form-control"
                        pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
                        onChange={(e)=> setMail({...email, email: e.target.value})}
                        required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Изменить
                    </button>
                </form>

                <li className="list-group-item">
                <b>id пользователя: {props.id}</b>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default PersonInfo;
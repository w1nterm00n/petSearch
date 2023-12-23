import React, { useRef, useState } from "react";


const Login_Form = () => {

    let [user, setUser]=useState();  
    let [token, setToken]=useState();
    let goodMessage=useRef();
    let badMessage=useRef();
 function auth(e){  
    e.preventDefault();

    const forms = document.getElementById('form')
  
        if (!forms.checkValidity()) {
         // e.preventDefault()
          e.stopPropagation()
          forms.classList.add('was-validated')
return
        } 
      
    console.log(user)
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let raw = JSON.stringify(user);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://pets.сделай.site/api/login", requestOptions)
    .then(response=> response.json())  
    .then(result=>{
      console.log(result)
        if ('data' in result){
        localStorage.token=result.data.token
          setToken(result.data.token)
       goodMessage.current.classList.remove('d-none');
       badMessage.current.classList.add('d-none');
    } else {
    goodMessage.current.classList.add('d-none');
    badMessage.current.classList.remove('d-none');
    }
 }
    )      
    
  }

    return (
        <div>
            <form onSubmit={auth} noValidate id="form"
            className="registration_form"
            style={{ width: "fit-content", margin: "0 auto", paddingTop: 30 }}
            >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Ваша почта
                </label>
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>setUser({...user, email:e.target.value})}
                />
                <div id="emailHelp" className="form-text">
                Мы не с кем ею не делимся
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Введите пароль
                </label>
                <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                // onChange={(e)=>setToken({...token, password:e.target.value})}
                onChange={(e)=>setUser({...user, password:e.target.value})}
                />
            </div>
            <button type="submit" id="sendLoginFormBtn" className="btn btn-primary">
                Войти
            </button>
            {/* <button className="btn btn-primary leave_btn">Отмена</button> */}
            </form>

            <div id="success" className="alert alert-success text-center m-3 d-none" role="alert" ref={goodMessage}>
            Вы успешно авторизовались
            </div>

            <div id="error" className="alert alert-danger text-center m-3 d-none" role="alert" ref={badMessage}>
            Вы ввели неправильные данные
            </div>

        </div>
    );
};

export default Login_Form;
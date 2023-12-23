import React, { useRef, useState } from "react";

const Registration_Form = () => {
    let [user, setUser] = useState();
    let [token, setToken] = useState();
    let goodMessage = useRef();
    let badMessage = useRef();
    function auth(e) {
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
            credentials: 'same-origin',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://pets.сделай.site/api/register", requestOptions)
            .then(result => {
                
                console.log(result);
                

                if (result.status==204){ 
                    goodMessage.current.classList.remove('d-none');
                    badMessage.current.classList.add('d-none');
                } else {
                    console.assert(result.status==422);

                    goodMessage.current.classList.add('d-none');
                    badMessage.current.classList.remove('d-none');
                }
            })
    }

    return (
        <div>
            <form onSubmit={auth}
                className="registration_form" id="form"
                style={{ width: "fit-content", margin: "0 auto", paddingTop: 30 }}
            >
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Ваше имя (кириллица)
                    </label>
                    <input type="text" className="form-control" id="exampleInputPassword1" required
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">
                        Ваш номер телефона
                    </label>
                    <input type="tel" className="form-control" id="exampleInputPhone" pattern="[0-9]{11}"
                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">
                        Ваш пароль (пароль должен содержать не менее 7 символов, обязательно: 1 цифра, 1
                        строчная, 1 заглавная буквы)
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        required
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="passwordConfirm" className="form-label">
                Подтвердите ваш пароль
                </label>
                <input
                type="password"
                className="form-control"
                id="passwordConfirm"
                required
                onChange={(e)=>setUser({...user, password_confirmation:e.target.value})} 
                />
            </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Ваша почта
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <div id="emailHelp" className="form-text">
                        Мы не с кем ею не поделимся
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required
                        onChange={(e) => setUser({ ...user, confirm: e.target.value })} />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Я согласен с соглашением
                    </label>
                </div>
                <button type="submit" id="sendRegFormBtn" className="btn btn-primary">
                    Зарегестрироваться
                </button>
                {/* <button className="btn btn-primary leave_btn">Отмена</button> */}
            </form>

            <div id="success" className="alert alert-success text-center m-3 d-none" role="alert" ref={goodMessage}>
                Вы успешно зарегестрировались
            </div>

            <div id="error" className="alert alert-danger text-center m-3 d-none" role="alert" ref={badMessage}>
                Вы ввели неправильные данные
            </div>
        </div>
    );
};

export default Registration_Form;
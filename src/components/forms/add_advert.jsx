import React, { useRef, useState } from "react";

const Add_Advert = () => {
  const [pet, setPet] = useState({}); // kind, photos1, description, district, mark

  const AddNewAdvert = async (e) => {
    e.preventDefault();

    // const form = document.getElementById("form");
    // const formData = new FormData(form);
    const fileInput = document.querySelector('#your-file-input') ;
    
    const formData = new FormData();
    formData.append("email", pet.email);
    formData.append("password", pet.password);
    formData.append("name", pet.name);
    formData.append("phone", pet.phone);
    formData.append("password_confirmation", pet.password_confirmation);
    formData.append("confirm", pet.confirm);
    formData.append("kind", pet.kind);
    //formData.append("photos1", pet.photos1); // Add the file directly, without JSON.stringify
    formData.append('photos1', fileInput.files[0]);
    formData.append("mark", pet.mark);
    formData.append("district", pet.district);
    formData.append("description", pet.description);

    let myHeaders = new Headers();
    // Убедитесь, что Content-Type установлен в null, чтобы браузер мог установить его автоматически для FormData
    // myHeaders.append("Content-Type", null);
    // myHeaders.append('Content-Type', 'multipart/form-data')
    // myHeaders.multipart/form-data
    console.log("data:" + formData);

    debugger;

    let requestOptions = {
      method: "POST",
      credentials: "same-origin",
      headers: myHeaders,
      // headers: {'Content-Type': 'multipart/form-data'},
      body: formData,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://pets.сделай.site/api/pets",
        requestOptions
      );

      if (!response.ok) {
        debugger;
        // throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      // Добавьте обработку успешного создания объявления
    } catch (error) {
      debugger;
      console.error("Error:", error);
      // Добавьте обработку ошибки
    }
  };

    return (
        <div>
    <div
    className="addAdvertDiv"
    style={{ width: "fit-content", margin: "0 auto", paddingTop: 30 }}
    >

      <form onSubmit={AddNewAdvert}
            className="registration_form" id="form"
            style={{ width: "fit-content", margin: "0 auto", paddingTop: 30 }}
            encType="multipart/form-data"
        >
      <h4 style={{backgroundColor: "aquamarine", padding: 10, borderRadius: 10}}>
        Введите личные данные</h4>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Имя
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Имя"
          required
          onChange={(e)=>setPet({...pet, name:e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Телефон
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Телефон"
          pattern="[0-9]{11}"
          required
          onChange={(e)=>setPet({...pet, phone:e.target.value})}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Почта
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Почта"
          pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          required
          onChange={(e)=>setPet({...pet, email:e.target.value})}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Пароль (пароль должен содержать не менее 7 символов, обязательно: 1 цифра, 1
                        строчная, 1 заглавная буквы)
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          required
          onChange={(e)=>setPet({...pet, password:e.target.value})}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Подтвердите ваш пароль
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordConfirm"
          required
          onChange={(e)=>setPet({...pet, password_confirmation:e.target.value})}
        />
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" required
        onChange={(e)=>setPet({...pet, confirm:e.target.value})}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
        Я не робот
        </label>
    </div>

      <h4 style={{backgroundColor: "aquamarine", padding: 10, borderRadius: 10}}>
        Введите информацию о животном</h4>

  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Животное, порода
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="Например 'собака хаски'"
      required
      onChange={(e)=>setPet({...pet, kind:e.target.value})}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="photo1" className="form-label">
      Прикрепите фото животного
    </label>
    <input
      type="file"
      className="form-control"
      id="your-file-input"
      required
      onChange={(e)=>setPet({...pet, photos1:e.target.files[0]})}
    />
  </div>


  <div className="mb-3">
    <label htmlFor="chipInput" className="form-label">
      {" "}
      Номер чипа (если есть)
    </label>
    <input type="text" className="form-control" id="chipInput" required
    onChange={(e)=>setPet({...pet, mark:e.target.value})}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Район города
    </label>
        <input
          type="text"
          className="form-control"
          placeholder="Район"
          required
          onChange={(e)=>setPet({...pet, district:e.target.value})}
        />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Описание
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={3}
      defaultValue={""}
      required
      onChange={(e)=>setPet({...pet, description:e.target.value})}
    />
  </div>

  <button type="submit" id="publicateAdvert" 
  className="btn btn-primary" style={{marginBottom: 300}}>
    Опубликовать
  </button>
  </form>
</div>


        </div>
    );
};

export default Add_Advert;
import React from "react";
import { Link } from "react-router-dom";



const AdvertCard = (props) => {
    return (
        <div>
            <div className="col">
            <div className="card">
                <img src={ 'https://pets.сделай.site' + props.photos} 
                className="card-img-top" alt="pet"/>

                <div className="card-body">
                <h5 className="card-title"> {props.kind} </h5>
                <p className="card-text">
                   Нашедший: {props.name}
                </p>
                <p className="card-text">
                   Обращаться по номеру: {props.phone}
                </p>
                <p className="card-text">
                   Район: {props.district}
                </p>
                <p className="card-text">
                   Описание: {props.description}
                </p>
                <p className="card-text">
                   Номер чипа: {props.mark}
                </p>
                <p className="card-text">
                   Дата: {props.date}
                </p>

                <small className="text-body-secondary">
                <Link to={'/default_pet'} className="nav-link" style={{color: "blue"}}>
                    подробнее..
                </Link>
                </small>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AdvertCard;
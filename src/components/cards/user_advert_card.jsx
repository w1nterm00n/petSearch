import React from "react";
import { Link } from "react-router-dom";
import delete_icon from '../../delete_icon.png'
import change_icon from '../../change_icon.png'

const UserAdvertCard = (props) => {
    return (

            <div className="card">
                <img
                    src={props.photo}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5 className="card-title">{props.advertType}  {props.name} </h5>
                    <small className="text-body-secondary">
                    <Link to={'/default_pet'} className="nav-link" style={{color: "blue"}}>
                    подробнее..
                    </Link>
                    </small>
                    <div className="ChangeOrDeleteAdvert">
                    <button>
                        <img src={delete_icon} alt="delete icon" />
                    </button>
                    <button>
                        <img src={change_icon} alt="change icon" />
                    </button>
                    </div>
                </div>
            </div>

    );
};

export default UserAdvertCard;
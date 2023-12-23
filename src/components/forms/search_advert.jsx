import React from "react";

const Search_Advert = () => {
    return (
        <div>
           <form
            className="d-flex searchAdvertField"
            style={{ width: "fit-content", margin: "0 auto", paddingTop: 30 }}
            >
            <input
                className="form-control me-2"
                type="search"
                placeholder="Район"
                aria-label="Search"
                required=""
            />
            <input
                className="form-control me-2"
                type="search"
                placeholder="Животное"
                aria-label="Search"
                required=""
            />
            <button className="btn btn-outline-success" type="submit">
                Искать
            </button>
            </form>
        </div>
    );
};

export default Search_Advert;
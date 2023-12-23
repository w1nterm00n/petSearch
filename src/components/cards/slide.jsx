import React from "react";

const Slide = (props) => {
  return (
    <>
      <div className={`carousel-item ` + props.className} style={{border: "1 solid black"}}>
        <img
          src={'https://pets.сделай.site' + props.image}
          className="d-block m-auto" alt="photo_pets" style={{maxHeight: '400px'}}
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="grey-bg-text">{props.kind}</h5>
          <p className="grey-bg-text">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Slide;
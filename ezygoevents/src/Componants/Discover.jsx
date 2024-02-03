import React from "react";

const Discover = () => {
  return (
    <>
      <h1 align="center" className="mt-5">
        Discover Every-Day Something new
      </h1>
      <div className="d-flex justify-content-center">
      <div className="card d-flex justify-content-center m-5" style={{"width":"18rem"}}>
        <img className="card-img-top" src="../assets/background.jpeg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card d-flex justify-content-center m-5" style={{"width":"18rem"}}>
        <img className="card-img-top" src="../assets/background.jpeg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card d-flex justify-content-spaceAround m-5" style={{"width":"18rem"}}>
        <img className="card-img-top" src="../assets/background.jpeg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center">
    <button type="button" class="btn m-3 "style={{'backgroundColor':'black','fontWeight':'bold','color':'white','width':'120px','borderRadius':'10px'}}>Explore</button>
    </div>
    </>
  );
};

export default Discover;

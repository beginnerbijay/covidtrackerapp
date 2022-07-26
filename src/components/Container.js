import React, {  } from 'react';

function Container(props){
  
    return (
      <>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
              {props.ans}
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default  Container;
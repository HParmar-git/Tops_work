import React from 'react'

function Func_props({img ,title ,desc}) {
  return (
   <div className="col-md-3">
            <div className="card" style={{ width: '100%' }}>
                <img className="card-img-top" src={img} width="100%" alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
  )
}

export default Func_props
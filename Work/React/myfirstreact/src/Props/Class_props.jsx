import React, { Component } from 'react'

export default class Class_props extends Component {
  render() {
    return (
     <div className="col-md-3">
                <div className="card" style={{ width: '100%' }}>
                    <img className="card-img-top" src={this.props.img} width="100%" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.desc}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
    )
  }
}

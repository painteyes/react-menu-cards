
import React, {Component } from 'react';

class Card extends Component {

    render() {
        return(
            <div className="col mb-5 mt-4">
                <div className="card" style={{width: '20rem', textAlign: 'center'}}>
                    <img src={this.props.image} className="card-img-top" alt="plate" style={{height: '200px', width:'auto', objectFit:'cover' }}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">€{this.props.price}</p>
                        <button className="btn btn-outline-danger">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card


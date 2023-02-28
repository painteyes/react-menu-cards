
import React, {Component } from 'react';

class Card extends Component {

    render() {
        return(
            <div className="col mb-5 mt-4">
                <div className="card" style={{width: '20rem', textAlign: 'center'}}>
                    <img src={this.props.card.image} className="card-img-top" alt="plate" style={{height: '200px', width:'auto', objectFit:'cover' }}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.name}</h5>
                        <p className="card-text">{this.props.card.price} €</p>
                        
                        <button className="btn btn-outline-danger" onClick={()=>{this.props.onDelete(this.props.card.id)}}>Delete</button>
                    {/*    
                        Poiché la prop "onDelete" richiede un argomento, 
                        la riga di codice "this.props.onDelete(this.props.card.id)" non è una funzione, ma una chiamata a funzione.

                        Se passassimo la prop "onDelete" direttamente come funzione, 
                        questa verrebbe eseguita durante il rendering iniziale del componente, 
                        invece di essere eseguita solo quando il pulsante viene cliccato.

                        Per evitare questo problema, invece di chiamare direttamente la prop "onDelete", 
                        possiamo avvolgerla in una funzione arrow. 
                        In questo modo, la chiamata alla prop "onDelete" verrà eseguita solo quando il pulsante viene cliccato.
                    */}
                    <button className="btn btn-outline-danger" onClick={() => this.props.onDelete(this.props.card.id)}>Delete</button>

                    
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Card


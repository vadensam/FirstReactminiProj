import React, {Component} from 'react';

class PersonCard extends Component{
    render(){
        const { fname, lname, age, hair } = this.props;
        return(
            <div>
                <h1>{lname}, {fname}</h1>
                <p>Age: {age}</p>
                <p>Hair: {hair}</p>
            </div>
        )
    }
}

export default PersonCard;
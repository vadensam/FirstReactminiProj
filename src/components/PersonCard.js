import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
        fname : this.props.fname,
        lname : this.props.lname,
        age : this.props.age,
        hair : this.props.hair
        }
    }
    render(){
        const { fname, lname, age, hair } = this.state;
        return(
            <div>
                <h1>{lname}, {fname}</h1>
                <p>Age: {age}</p>
                <p>Hair: {hair}</p>
                <button onClick={ () => { this.setState({age : age+1}) } }>It's My birthday!</button>
            </div>
        )
    }
}

export default PersonCard;
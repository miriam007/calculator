import React, { Component } from 'react';

class Cat extends Component{
    state= {
        facts: []
    };

    componentDidMount(){
        console.log('here');
        fetch('https://cat-fact.herokuapp.com')
        .then(data => data.json())
        .then(data)
    }
    


}

export default Cat;
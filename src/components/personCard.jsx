import React from "react";
class PersonCard extends React.Component {
    render () {
        let myStyle = {
            margin: "5px auto",
        }
        let { name, lastName, age, hairColor } = this.props;
        return (
            <div className="container" style={myStyle}>
                <h1>{ lastName }, { name }</h1>
                <p>Age: { age }</p>
                <p>Hair Color: { hairColor }</p>
            </div>
        );
    }
}

export default PersonCard;
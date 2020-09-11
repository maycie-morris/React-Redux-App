import React from 'react';

export const Hero = props => {
    return (
        <div className = "hero-container">
            {console.log(props.hero)}
            {/* {props.hero.map(item => {
                return (
                    <div className="hero">
                        <h2 key={item._id} >Hero Name: {item.name} </h2>
                    <div className="hero-info">
                        <h3>Real Name: {item.real_name} </h3>
                        <h4>Age: {item.age} </h4>
                        <h5>Base of Operation: {item.base_of_operation} </h5>
                        <p> {item.description} </p>
                    </div>
                    </div>
                )
            })} */}
        </div>
    )
}
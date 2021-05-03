import React from 'react';


const HogDetails = (props) => {
    // console.log(props.hogData)

    return (
        <div>
            <h2>Specialty: {props.hogData.specialty}</h2>
            <h2> Are they greasy??? {props.hogData.greased ? <h3>That's a GREASED Hog</h3> : <h3>Not greasy!</h3>} </h2>
            <h4>Weight: {props.hogData.weight} lbs.</h4>
            <h4>Highest Earned Medal: {props.hogData['highest medal achieved']}</h4>
        </div>
    )

    
}

export default HogDetails;


import React from 'react';

const CoordinateInput = (props) => {
    return (
        <>
            <label htmlFor={props.coordType}>Enter {props.coordType} </label>
            <input
            type="number"
            name={props.coordType}
            id={props.coordType}
            value={props.coordinate}
            onChange={props.onChange}
            />
        </>
    )
}


export default CoordinateInput;
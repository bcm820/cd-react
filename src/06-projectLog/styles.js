import React from 'react';
import styled from 'styled-components'

// Basic styled component
export const Title = styled.h1`
    font-size: 40px;
    font-weight: lighter;
    color: darkred;
    text-align: center;
`

// Using styled() to apply styles to any tag via 'tag' prop
export const Field = styled(({tag, children, ...props}) =>
    React.createElement(tag, props, children))`
    padding: 0px 10px;
    margin: 10px;
    border: 2px solid darkred;
    border-radius: 10px;
    height: 40px;
    text-align: ${props => props.btn ? 'center' : 'left'};
    font-size: ${props => props.btn ? '16px' : '20px'};
    width: ${props => props.sm ? '120px' : '200px'};
    color: ${props => props.btn ? 'white' : 'darkred'};
    background-color: ${props => props.btn ? 'darkred' : 'white'};
    outline: none;
`

// Declaring a styled-cmp...
const StyledList = styled.div`
    width: 250px;
    padding: 0px 10px;
    margin: 10px;
    color: darkred;
    border: 2px solid darkred;
`

// ...and then making it a React cmp
export const List = props => {
    let time
    props.time === 1
    ? time = '1 hr.'
    : time = `${props.time} hrs.`
    return (
    <StyledList>
    {props.time === 0
    ? <h4>{props.category}</h4>
    : <h4>{props.category} ({time})</h4>}
    {props.list.map(item =>
    item.hours < 2
    ? <p>{item.task} ({item.hours} hr.)</p>
    : <p>{item.task} ({item.hours} hrs.)</p>
    )}
    </StyledList>
    )
}

const Labl = styled.div`
    display: block;
    font-size: 16px;
    text-align: right;
    display: flex;
`

export const Label = props => {
    return (
    <Labl>
        <div style={{padding: '25px', width: 100}}>
            {props.field}:
        </div>
        <div>{props.children}</div>
    </Labl>
    )
}
import * as React from 'react'
import styled from '../utils/styledComponents'

const CardRoot = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    background-color: #1e1825;
    width: auto;
    height: auto;
    padding: 15px;
    border-radius: 12px;
`

const Title = styled.text`
    line-height: 20px;        /* fallback */
    max-height: 40px;       /* fallback */
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Varela Round', sans-serif;
    font-weight: 200;
    letter-spacing: 2px;
    margin-top: 10px;
    text-transform: uppercase;
    font-size: 15px;
    color: #DDD;
`
const Description = styled.text`
    line-height: 18px;        /* fallback */
    max-height: 40px;       /* fallback */
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    font-family: 'Varela Round', sans-serif;
    font-weight: 100;
    font-size: 15px;
    color: #FFF;    
`

const SubmitButton = styled.button`

    align-self: flex-end;
    font-family: 'Varela Round', sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: #0FF;
    margin-top: 10px;
    color: #000;
    border: 0px;
    padding: 10px 15px 10px 15px;
    animation-duration: 5s;
    &:hover {
        background-color: #44444477;
        color: #FFF;
    }
`

class TenderDetailView extends React.Component {

    render() {
        return (
            <CardRoot>
                <Title>
                    Description
                </Title>
                <Description>
                    This is a large text.
                    This is a large text.
                    This is a large text.
                    This is a large text.
                    This is a large text.
                </Description>
                <Title>
                    Number of Submissions
                </Title>
                <Description> 5
                </Description>
                <SubmitButton > 
                    Make Submission
                </SubmitButton>
            </CardRoot>
        )
    }
}

export default TenderDetailView
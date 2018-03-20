import * as React from 'react'
import styled from '../utils/styledComponents'

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    background-color: #332c3b;
    width: 100% - 30px;
    margin: 20px;
    height: auto;
    padding: 15px;
    border-radius: 12px;
`

const InputFieldDiv = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`
const Title = styled.text`
    font-family: 'Varela Round', sans-serif;
    font-size: 40px;
    margin-bottom: 20px;
    color: #5effbd;
`
const InputTitle = styled.text`
    font-family: 'Varela Round', sans-serif;
    letter-spacing: 3px;
    font-size: 12px;
    padding-left: 4px;
    color: #FFF;
    text-transform: uppercase;
`
const InputTextMultiline = styled.textarea`
        background-color: #00000033;
        color: #FFF;
        width: 400px;
        height: auto;
        margin-top: 4px;
        padding: 5px;
        border: 0px;
`
const InputText = styled.input`
    background-color: #00000033;
    color: #FFF;
    width: 400px;
    margin-top: 4px;
    padding: 5px;
    border: 0px;
`

interface TextInputProps {
    title: string
    onInputChange: (newInput: string) => void
}

const InputTextField = (props: TextInputProps) => (
    <InputFieldDiv>
        <InputTitle >{props.title} </InputTitle >
        <InputText />
    </InputFieldDiv>
)

const InputTextArea = (props: TextInputProps) => (
    <InputFieldDiv>
        <InputTitle >{props.title} </InputTitle >
        <InputTextMultiline rows={5} onChange={(event) => props.onInputChange(event.target.value)} />
    </InputFieldDiv>
)


class FillTenderForm2 extends React.Component<any, any> {

    render() {
        return (
            <Root>
                <Title> Submit New Tender </Title>
                <InputTextField
                    title="Title"
                    onInputChange={val => {
                        console.log(val);
                    }}
                />
                <InputTextArea
                    title="Description"
                    onInputChange={val => {
                        console.log(val);
                    }}
                />
            </Root>
        )
    }
}

export default FillTenderForm2
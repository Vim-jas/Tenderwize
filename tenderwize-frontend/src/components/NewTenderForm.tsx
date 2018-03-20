import * as React from 'react'
import styled from '../utils/styledComponents'
import { DatePicker } from 'material-ui-pickers'
import { FilePicker } from 'react-file-picker';
import '../index.css';

const Root = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    background-color: #332c3b;
    width: 50%;
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
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 4px;
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
    font-size: 20px;
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

const UploadButton = styled.button`
    align-self: flex-end;
    font-family: 'Varela Round', sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #222;
    margin-top: 5px;
    color: #0FF;
    border: 0px;
    padding: 10px;
    animation-duration: 5s;
    &:hover {
        background-color: #44444477;
        color: #FFF;
    }
`

const SubmitButton = styled.button`
    align-self: flex-end;
    font-family: 'Varela Round', sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #222;
    margin-top: 5px;
    color: #0FF;
    font-size: 20px;
    border: 0px;
    padding: 10px;
    animation-duration: 5s;
    &:hover {
        background-color: #44444477;
        color: #FFF;
    }
`

interface NewTenderFormState {
    date: Date,
    dateFocused: boolean | null,
}

class NewTenderForm extends React.Component<any, NewTenderFormState> {

    state = {
        date: new Date(),
        dateFocused: false
    }

    handleChange = (m: Date) => {
        this.setState({ date: m });
    };

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
                <InputFieldDiv>
                    <InputTitle >Hash Submission Deadline</InputTitle >
                    <DatePicker
                        style={{
                            color: '#FFF'
                        }}
                        value={this.state.date}
                        onChange={this.handleChange}
                        animateYearScrolling={false}
                    />
                </InputFieldDiv>
                <InputFieldDiv>
                    <InputTitle >Final Document Submission Deadline</InputTitle >
                    <DatePicker
                        id="date-picker"
                        value={this.state.date}
                        onChange={this.handleChange}
                        animateYearScrolling={false}
                    />
                </InputFieldDiv>
                <InputFieldDiv>
                    <InputTitle >Upload document for hashing</InputTitle >
                    <FilePicker
                        extensions={['pdf']}
                        onChange={(file: File) => console.log(file.name)}
                        onError={(errMsg: any) => console.log(errMsg)}
                    >
                        <UploadButton>
                            Upload Document
                        </UploadButton>
                    </FilePicker>
                </InputFieldDiv>
                <SubmitButton>
                    Submit
                </SubmitButton>
            </Root >
        )
    }
}

export default NewTenderForm
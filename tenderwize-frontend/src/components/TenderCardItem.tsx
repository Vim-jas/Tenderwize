import * as React from 'react'
import styled from '../utils/styledComponents'

const CardRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    background-color: #332c3b;
    width: 300px;
    height: 300px;
    padding: 15px;
    border-radius: 12px;
`

const CardTitle = styled.text`
    line-height: 40px;        /* fallback */
    max-height: 80px;       /* fallback */
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Varela Round', sans-serif;
    font-weight: 700;
    font-size: 35px;
    color: #FEF;
`

const OrgDetailDiv = styled.div`    
    margin-top: 20px;
    font-family: 'Varela Round', sans-serif;
    display: flex;
    width: 300px;
    white-space: pre-wrap;
    flex-direction: row;
    justify-content: space-between;
`

const OrgTitle = styled.div`
    margin-top: 10px;
    font-size: 15px;
    color: #ffdd88;
    width: inherit;
    overflow-wrap: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
`

const OrgImage = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
`

const DateTimeInfoView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DateTimeInfoTitle = styled.text`
    letter-spacing: 1px;
    font-family: 'Varela Round', sans-serif;
    margin-top: 15px;
    font-size: 15px;
    color: #BBB;
`
const DateTimeInfoText = styled.text`
    font-family: 'Varela Round', sans-serif;
    font-size: 20px;
    color: #FFF;
`
const ViewTendorButton = styled.button`
    align-self: flex-end;
    font-family: 'Varela Round', sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #000;
    margin-top: 40px;
    color: #0FF;
    border: 0px;
    padding: 10px;
    animation-duration: 5s;
    &:hover {
        background-color: #44444477;
        color: #FFF;
    }
`

class TenderCardItem extends React.Component {

    render() {
        return (
            <CardRoot>
                <CardTitle>
                    HPC Laboratory
                </CardTitle>
                <OrgDetailDiv>
                    <OrgTitle>
                        Indian Space Research Organization
                    </OrgTitle>
                    <OrgImage
                        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201503/isro_logo_650_030115023112.jpg"
                    />
                </OrgDetailDiv>
                <DateTimeInfoView>
                    <DateTimeInfoTitle>
                        Posted on
                    </DateTimeInfoTitle>
                    <DateTimeInfoText>
                        April 10, 2018
                    </DateTimeInfoText>
                </DateTimeInfoView>
                <DateTimeInfoView>
                    <DateTimeInfoTitle>
                        Submission Deadline
                    </DateTimeInfoTitle>
                    <DateTimeInfoText>
                        May 10, 2018
                    </DateTimeInfoText>
                </DateTimeInfoView>
                <ViewTendorButton>
                    View Details
                </ViewTendorButton>
            </CardRoot>
        )
    }
}

export default TenderCardItem
import * as React from 'react'
import styled from '../utils/styledComponents'
import TenderCardItem from './TenderCardItem';

const Root = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    background-color: #110022;
    width: auto;
    height: auto;
    padding: 15px;
    border-radius: 12px;
`

const Title = styled.text`
    font-family: 'Varela Round', sans-serif;
    font-size: 40px;
    color: #5effbd;
`

const TendorListDiv = styled.div`
    margin-top: 20px;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 10px;
    & > div {
        margin-right: 20px;
    }
`

const UnsubmittedTendors = (props: any) => (
    <Root>
        <Title >
            New Tendors
        </Title>
        <TendorListDiv>
            <TenderCardItem />
            <TenderCardItem />
            <TenderCardItem />
            <TenderCardItem />
            <TenderCardItem />
            <TenderCardItem />
        </TendorListDiv>
    </Root>
)

export default UnsubmittedTendors
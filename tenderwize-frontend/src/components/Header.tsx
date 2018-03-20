import * as React from 'react'
import styled from '../utils/styledComponents'

const Root = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    background-color: #110022;
    width: auto;
    height: 100px;
    padding: 15px;
    border-radius: 12px;
`

const AppTitle = styled.text`
    font-family: 'Varela Round', sans-serif;
    font-size: 60px;
    color: #FFFFFF;
`

class Header extends React.Component {

    render() {
        return (
            <Root>
                <AppTitle >
                    TenderWize
                </AppTitle>
            </Root>
        )
    }
}

export default Header
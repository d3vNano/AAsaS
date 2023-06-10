import styled from "styled-components";


export default function Header () {
    return (
        <HeaderWrapper>
                <h1>CINEFLEX</h1>
        </HeaderWrapper>
    )
}
//CSS.
const HeaderWrapper = styled.div`
    height: 67px;
    margin-bottom: 35px;
    

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #C3CFD9;

    h1 {
        font-weight: 400;
        font-size: 34px;
        color: #E8833A;
        letter-spacing: 0.05em;
        text-align: center;
    }

    Link {
        text-decoration: none;
    }
`
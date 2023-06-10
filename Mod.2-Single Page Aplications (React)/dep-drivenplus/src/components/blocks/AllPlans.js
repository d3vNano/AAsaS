import { Link } from "react-router-dom";

import styled from "styled-components";

function AllPlans({ id, image, price }) {

    return (
        <Screen>
            <Link to={`/subscriptions/${id}`}>
                <Block>
                    <img src={image} alt={id} />
                    <Price>R$ {price}</Price>
                </Block>
            </Link>
        </Screen>
    )
}

export default AllPlans;

const Screen = styled.div`
    a {
        text-decoration: none;
    }
`

const Block = styled.div`

    width: 290px;
    height: 180px;

    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: space-around;


    border: 3px solid #7E7E7E;
    border-radius: 12px;
    background-color: #0E0E13;
`

const Price = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 700;
`
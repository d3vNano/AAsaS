import styled from "styled-components";

function Footer({ sessions, film }) {

    return (
        <FooterTable>
            <div className="poster">
                <img src={film.posterURL} alt="poster" />
            </div>
            <p>{film.title}</p>

        </FooterTable>
    )
}

export default Footer;

const FooterTable = styled.div`

    width: 100%;
    height: 115px;

    position: fixed;
    bottom: 0;
    left: 0;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;
    justify-content: center;

    .poster {
        width: 75px;
        height: 100px;
        margin-right: 15px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 65px;
        height: 90px;
        object-fit: cover;
    }

    p {
        width: 225px;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
    }

`
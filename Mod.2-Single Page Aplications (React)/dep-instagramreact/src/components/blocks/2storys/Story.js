import ninegag from "../../../assets/img/9gag.svg";
import meowed from "../../../assets/img/meowed.svg";
import barked from "../../../assets/img/barked.svg";
import nathanwpylestrangeplanet from "../../../assets/img/nathanwpylestrangeplanet.svg";
import wawawicomics from "../../../assets/img/wawawicomics.svg";
import respondeai from "../../../assets/img/respondeai.svg";
import filomoderna from "../../../assets/img/filomoderna.svg";
import memeriagourmet from "../../../assets/img/memeriagourmet.svg";


const contStory = [
    {
        img: `${ninegag}`,
        alt: "9gag",
        nome: "9gag",
    },

    {
        img: `${meowed}`,
        alt: "meowed",
        nome: "meowed",
    },

    {
        img: `${barked}`,
        alt: "barked",
        nome: "barked",
    },

    {
        img: `${nathanwpylestrangeplanet}`,
        alt: "nathanwpylestrangeplanet",
        nome: "nathanwpylestrangeplanet",
    },

    {
        img: `${wawawicomics}`,
        alt: "wawawicomics",
        nome: "wawawicomics",
    },

    {
        img: `${respondeai}`,
        alt: "respondeai",
        nome: "respondeai",
    },

    {
        img: `${filomoderna}`,
        alt: "filomoderna",
        nome: "filomoderna",
    },

    {
        img: `${memeriagourmet}`,
        alt: "memeriagourmet",
        nome: "memeriagourmet",
    }
]

function StorysCont (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt={props.alt} />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
}

function Story (){
    return (
        <div class="stories">
            {contStory.map((storie) => (
                <StorysCont img={storie.img} alt={storie.alt} nome={storie.nome} />
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

export default Story
import badvibesmemes from "../../../assets/img/bad.vibes.memes.svg";
import chibirdart from "../../../assets/img/chibirdart.svg";
import razoesparaacreditar from "../../../assets/img/razoesparaacreditar.svg";
import adorableanimals from "../../../assets/img/adorable_animals.svg";
import smallcutecats from "../../../assets/img/smallcutecats.svg";

const contSuggest = [
    {
        img: `${badvibesmemes}`,
        alt: "bad.vibes.memes",
        name: "bad.vibes.memes",
    },

    {
        img: `${chibirdart}`,
        alt: "chibirdart",
        name: "chibirdart",
    },

    {
        img: `${razoesparaacreditar}`,
        alt: "razoesparaacreditar",
        name: "razoesparaacreditar",
    },

    {
        img: `${adorableanimals}`,
        alt: "adorableanimals",
        name: "adorableanimals",
    },

    {
        img: `${smallcutecats}`,
        alt: "smallcutecats",
        name: "smallcutecats",
    },
]

function SuggestsCont (props) {

    return (
        <div class="sugestao">
                <div class="usuario">
                    <img src={props.img} alt={props.alt}/>
                    <div class="texto">
                        <div class="nome">
                            {props.name}
                        </div>
                        <div class="razao">
                            Segue você
                        </div>
                    </div>
                </div>
                <div class="seguir">
                    Seguir
                </div>
            </div>
    )
}

function Suggests () {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>
                    Ver tudo
                </div>
            </div>
            {contSuggest.map((e) => (
                <SuggestsCont img={e.img} name={e.name} alt={e.alt} />
            ))}
        </div>
    )
}

export default Suggests;
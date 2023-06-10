import catanacomics from "../../../assets/img/catanacomics.svg";

const contUser = [

    {
        img: `${catanacomics}`,
        alt: "catanacomics",
        user: "catanacomics",
        name: "Catana"
    }
]

function UserCont (props) {
    return (
        <div class="usuario">
            <img src={props.img} alt={props.alt}/>
            <div class="texto">
                <strong>{props.user}</strong>
                {props.name}
            </div>
        </div>
    )
}

function User () {
    return (
        <>
            {contUser.map((e) => (
                <UserCont img={e.img} alt={e.alt} user={e.user} name={e.name} />
            ))}
        </>
    )
}

export default User;
//import { React, useState } from "react";

import meowed from "../../../assets/img/meowed.svg";
import barked from "../../../assets/img/barked.svg";
import respondeai from "../../../assets/img/respondeai.svg";

import gatotelefone from "../../../assets/img/gato-telefone.svg";
import dog from "../../../assets/img/dog.svg";
import adorableanimals from "../../../assets/img/adorable_animals.svg";
import capivarauser from "../../../assets/img/capivara-user.png";
import capivarinha from "../../../assets/img/capivarinha.gif";

//const [like, setLike] = React.useState("liked")

const contPost = [
    {
        userImg: `${capivarauser}`,
        userName: "capivarinha",
        postImg: `${capivarinha}`,
        userLikeImg: `${adorableanimals}`,
        userLikeName: "capivaras>resto",
        userLikeAmount: "999.999",
    },

    {
        userImg: `${meowed}`,
        userName:"meowed",
        postImg: `${gatotelefone}`,
        userLikeImg: `${respondeai}`,
        userLikeName: "respondeai",
        userLikeAmount: "101.523",
    },

    {
        userImg: `${barked}`,
        userName: "barked",
        postImg: `${dog}`,
        userLikeImg: `${adorableanimals}`,
        userLikeName: "adorable_animals",
        userLikeAmount: "99.159",
    }
]

function PostsCont (props) {

/*    if(!liked && e.detail === 2) {
        setLike(true);
    }
*/
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario"><img src={props.userImg} alt={props.userName}/>{props.userName}</div>
                <div class="acoes"><ion-icon name="ellipsis-horizontal"></ion-icon></div>
            </div>
            <div class="conteudo"><img src={props.postImg} alt={props.userName}/></div>
            
            <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.userLikeImg} alt={props.userLikeName} />
                        <div class="texto">Curtido por <strong>{props.userLikeName}</strong> e <strong>outras {props.userLikeAmount} pessoas</strong></div>
                    </div>
                </div>
        </div>
    )
}

function Post () {

    return (
        <div class="posts">
            {contPost.map((e) => (
                <PostsCont userImg={e.userImg} userName={e.userName} postImg={e.postImg} userLikeImg={e.userLikeImg} userLikeName={e.userLikeName} userLikeAmount={e.userLikeAmount} />
            ))}
        </div>
    )
}

export default Post;
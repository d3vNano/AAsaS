import User from "../blocks/4lateral/User";
import Suggests from "../blocks/4lateral/Suggests";
import LinksAndCopy from "../blocks/4lateral/LinksAndCopy";

function RightContainer (){
    return (
        <div class="sidebar">
            <User />
            <Suggests />
            <LinksAndCopy />
        </div>
    )
}

export default RightContainer;
import Logo from "../blocks/1topo/Logo"
import Search from "../blocks/1topo/Search"
import Menu from "../blocks/1topo/Menu"

function Header () {
    return (
        <div class="navbar">
            <div class="container">
                <Logo />
                <Search />
                <Menu />
            </div>
        </div>
    )
}

export default Header
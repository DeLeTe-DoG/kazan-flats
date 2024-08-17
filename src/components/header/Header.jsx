import Widgets from "./Urls"
import HeadBlock from "./HeadBlock"
import DDMenu from "./DropDownMenu"

export default function Header() {
    return(
        <header  id='contacts'>
            <DDMenu />
            <Widgets />
            <HeadBlock />
        </header>
    )
}
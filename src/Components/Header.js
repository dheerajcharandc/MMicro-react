import LeftSectionHeader from "./LeftSectionHeader"
import RightSectionHeader from "./RightSectionHeader"
import "./Header.css"

function Header() {
  return (
    <div className="Header">
        <LeftSectionHeader/>
        <RightSectionHeader/>
    </div>
  )
}

export default Header
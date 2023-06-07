import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import "./Header.scss";

function Header({ isVisible,threshold, ...rest }) {
  return (
    <header className="header">
      <ul>
        <li>
          isVisible:
          <span style={{background:isVisible ? "green": "red"}}>{isVisible ? <AiOutlineCheck /> : <AiOutlineClose />}</span>
        </li>
        <li>
          threshold : {threshold} %
        </li>
      </ul>
    </header>
  );
}

export default Header;

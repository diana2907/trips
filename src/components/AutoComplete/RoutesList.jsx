import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from "react";

export const RoutesList = ({ list }) => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <h3>{item.city}</h3>
          <p>{item.country}</p>
          <p>{item.euro_price} EUR</p>
          <button onClick={onClick} type="button">
            <IconContext.Provider value={{ color: "orange" }}>
              <AiFillCaretDown />
            </IconContext.Provider>
          </button>
          {clicked && <p>{item.city}</p>}
        </li>
      ))}
    </ul>
  );
};

"use client";

import { FaHome, FaTasks, FaWhmcs } from "react-icons/fa";

import styles from "@components/Pagination-Navigations/Button-MenuNav.module.css";
const ButtonMenuNavigations: React.FC<{
  onButtonClick: (buttonName: string) => void;
}> = ({ onButtonClick }) => {
  return (
    <ul className="w-full">
      <li>
        <button
          className={styles.ButtonsNav}
          onClick={() => onButtonClick("Home")}
        >
          <div className={styles.DivIcoAndSpan}>
            {/* <CgHomeAlt /> */}
            <FaHome style={{ fontSize: "18px" }} />
            <span className={styles.Span}>Home</span>
          </div>
        </button>
      </li>

      <li>
        <button
          className={styles.ButtonsNav}
          onClick={() => onButtonClick("Todos")}
        >
          <div className={styles.DivIcoAndSpan}>
            <FaTasks style={{ fontSize: "18px" }} />

            <span className={styles.Span}>Todos</span>
          </div>
        </button>
      </li>
      <li>
        <button
          className={styles.ButtonsNav}
          onClick={() => onButtonClick("Settings")}
        >
          <div className={styles.DivIcoAndSpan}>
            <FaWhmcs style={{ fontSize: "18px" }} />

            <span className={styles.Span}>Settings</span>
          </div>
        </button>
      </li>
    </ul>
  );
};
export default ButtonMenuNavigations;

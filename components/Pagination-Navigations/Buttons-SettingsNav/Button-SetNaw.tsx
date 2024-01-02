"use client";

import { FaHome, FaTasks, FaWhmcs } from "react-icons/fa";

import styles from "@components/Pagination-Navigations/Button-Nav.module.css";
const ButtonSetNaw: React.FC<{
  onButtonClick: (buttonName: string) => void;
}> = ({ onButtonClick }) => {
  return (
    <ul className="w-full flex flex-row justify-center">
      <li className="mx-2">
        <button
          className={styles.ButtonsNav}
          onClick={() => onButtonClick("Account")}
        >
          <div className={styles.DivIcoAndSpanNoPadding}>
            {/* <CgHomeAlt /> */}
            <FaHome style={{ fontSize: "18px" }} />
            <span className={styles.Span}>Account</span>
          </div>
        </button>
      </li>

      <li className="mx-2">
        <button
          className={styles.ButtonsNav}
          onClick={() => onButtonClick("Appearance")}
        >
          <div className={styles.DivIcoAndSpanNoPadding}>
            <FaWhmcs style={{ fontSize: "18px" }} />

            <span className={styles.Span}>Appearance</span>
          </div>
        </button>
      </li>
    </ul>
  );
};
export default ButtonSetNaw;

"use client";

import { FaHome, FaTasks, FaWhmcs } from "react-icons/fa";

import styles from "@components/Pagination-Navigations/Button-Nav.module.css";
import { useContext } from "react";
import { NavButMenu } from "@/components/Context";
const ButtonMenuNavigations =()=> {

  const PageName = useContext(NavButMenu) 
  return (
    <ul className="w-full">
      <li>
        <button
          className={styles.ButtonsNav}
          onClick={() => {PageName?.setActiveMain("Home"), console.log("Home", PageName?.activeMain)}}
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
          onClick={() => PageName?.setActiveMain("Todos") }
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
          onClick={() => PageName?.setActiveMain("Settings")}
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

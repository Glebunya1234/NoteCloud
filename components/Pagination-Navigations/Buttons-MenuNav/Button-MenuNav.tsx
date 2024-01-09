"use client";

import { FaHome, FaTasks, FaWhmcs } from "react-icons/fa";

import styles from "@components/Pagination-Navigations/Button-Nav.module.css";
import { useContext } from "react";
import { NavButMenu } from "@/components/Context";
import { FiChevronRight } from "react-icons/fi";
const ButtonMenuNavigations = () => {
  const PageName = useContext(NavButMenu);
  return (
    <ul className="w-full">
      <li className="border-b-[1px] md:border-none border-bg-mydurkgrey">
        <button
          className={styles.ButtonsNav}
          onClick={() => {
            PageName?.setActiveMain("Home");
          }}
        >
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            <div className={styles.DivIcoAndSpan}>
              {/* <CgHomeAlt /> */}
              <FaHome style={{ fontSize: "18px" }} />
              <span className={styles.Span}>Home</span>
            </div>
          </label>
          <FiChevronRight className="md:hidden" />
        </button>
      </li>

      <li className="border-b-[1px] md:border-none border-bg-mydurkgrey">
        <button
          className={styles.ButtonsNav}
          onClick={() => PageName?.setActiveMain("Todos")}
        >
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            <div className={styles.DivIcoAndSpan}>
              <FaTasks style={{ fontSize: "18px" }} />

              <span className={styles.Span}>Todos</span>
            </div>
          </label>
          <FiChevronRight className="md:hidden" />
        </button>
      </li>
      <li>
        <button
          className={styles.ButtonsNav}
          onClick={() => PageName?.setActiveMain("Settings")}
        >
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            <div className={styles.DivIcoAndSpan}>
              <FaWhmcs style={{ fontSize: "18px" }} />

              <span className={styles.Span}>Settings</span>
            </div>
          </label>
          <FiChevronRight className="md:hidden" />
        </button>
      </li>
    </ul>
  );
};
export default ButtonMenuNavigations;

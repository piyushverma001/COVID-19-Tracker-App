import React, { useState } from "react";
import cx from "classnames";
import styles from "./DarkModeSwitch.module.css";

const DarkModeSwitch = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.themewrapper}>
      <label className={styles.themeswitch}>
        <input type="checkbox" onChange={() => changeTheme()} />
        <div className={cx(styles.slider, styles.round)}></div>
      </label>
    </div>
  );
};

export default DarkModeSwitch;

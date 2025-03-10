"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";
import { IoMdClose } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const activeMenu = () => setIsActive(!isActive);
  return (
    <header
      className={styles.headerWrapper}
    >
      <nav className={`${styles.navWrapper} flexContainer`}>
        <Link href="/">
          <img
            src="/assets/images/logo.png"
            alt="INVITASTUDIO"
            className={styles.navLogo}
          />
        </Link>
        <button className={styles.buttonMenu} onClick={activeMenu}>
          {!isActive ? <HiMiniBars3 /> : <IoMdClose />}
        </button>
        <ul className={`${styles.navList} ${!isActive ? "" : styles.active}`}>
          <li>
            <Link
            href="/"
            onClick={activeMenu}
            >
              Ejemplos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

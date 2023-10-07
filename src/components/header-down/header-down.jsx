import React from "react";
import style from "./header-down.module.scss"

export const HeaderDown = () => {
    return (
        <>
            <div className={style.headerDown}>
                <div style={{ display: "flex" }} className="container">
                    <div className={style.logo}>
                        <a href="#"><img src="./src/img/header-downLogo.svg" alt="logo" /></a>
                    </div>

                    <ul className={style.headerDown_link}>
                        <li>
                            <select>
                                <option>Home</option>
                                <option>About</option>
                                <option>Blog</option>
                            </select>
                        </li>
                        <li>Pages</li>
                        <li>Products</li>
                        <li>Blog </li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>

                    <div className={style.header_serch}>
                        <input type="text" />
                        <div className={style.header_downIcon}>
                            <img src="./src/img/header-search.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
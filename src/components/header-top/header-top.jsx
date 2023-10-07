import React from "react";
import style from "./header-top.module.scss"

export const HeaderTop = () => {
    return (
        <>
            <div className={style.headerTop}>
                <div className="container" style={{display: "flex"}}>
                    <div className={style.contact}>
                        <div className={style.emailBox}>
                            <img src="./src/img/header-email.svg" alt="email" />
                            <p className={style.email}> mhhasanul@gmail.com </p>
                        </div>
                        <div className={style.phoneBox}>
                            <img src="./src/img/header-phone.svg" alt="email" />
                            <p className={style.phone}> (12345)67890 </p>
                        </div>
                    </div>
                    <ul className={style.headerUl}>
                        <li>
                            <select>
                                <option value="">English</option>
                                <option value="">Uzbek</option>
                                <option value="">RUS</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option value="">USD</option>
                                <option value="">SUM</option>
                                <option value="">RUB</option>
                            </select>
                        </li>
                        <li>Login <img src="./src/img/header-user.svg" alt="" /></li>
                        <li>Wishlist <img src="./src/img/header-heart.svg" alt="" /></li>
                        <li><img src="./src/img/header-card.svg" alt="" /></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
import React from "react";
import { HeaderTop } from "./components/header-top";
import { HeaderDown } from "./components/header-down";
import "./global.scss"

export const Home = () => {
    return (
        <>
            <HeaderTop />
            <HeaderDown />
        </>
    );
}
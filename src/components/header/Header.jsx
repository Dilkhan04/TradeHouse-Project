import React from "react";
import style from "./css/header.module.scss";
import logo from "../../media/icons/header/Group 1.svg";
import headerImage from "../../media/images/header/Rectangle 2.png";
import { Box } from "@mui/material";
import ModalReg from "../modalReg/ModalReg";

export default function Header() {
    const headerText = {
        title: "Trade House",
    };
    return (
        <Box className={style.Header}>
            <Box className='container'>
                <Box className={style.HeaderInner}>
                    <Box className={style.HeaderInnerOne}>
                        <img src={logo} alt='логотип' />
                        <h2>{headerText.title}</h2>
                    </Box>
                    <ModalReg />
                </Box>
            </Box>
        </Box>
    );
}

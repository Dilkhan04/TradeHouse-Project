import React from "react";
import style from "./css/NextTwoValid.module.scss";
import { Box, Button } from "@mui/material";
import logoReg from "../../../media/icons/header/Logo.svg";
import { ButtonDalee } from "../modalStyle";
const NextTwoValid = () => {
    return (
        <Box className={style.ModalBox}>
            <Box className={style.ModalBoxInner}>
                <img
                    src={logoReg}
                    alt='LogoReg'
                    className={style.ModalBoxInnerLogo}
                />
                <h3>
                    Введите код, который мы отправили <br /> на вашу почту
                </h3>
                <form></form>
                <Button sx={ButtonDalee}>Далее</Button>
                <Button sx={ButtonDalee}>Отправить другой код</Button>
            </Box>
        </Box>
    );
};

export default NextTwoValid;

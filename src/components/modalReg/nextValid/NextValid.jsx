import React from "react";
import style from "./css/nextValid.module.scss";
import { Box, Button, Modal } from "@mui/material";
import logoReg from "../../../media/icons/header/Logo.svg";
import PinInput from "react-pin-input";
import { ButtonDalee } from "../modalStyle";
const NextValid = () => {
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
                <form>
                    {/* <PinInput
                        length={4}
                        initialValue=''
                        secret
                        onChange={(value, index) => {}}
                        type='numeric'
                        inputMode='number'
                        style={{ padding: "10px" }}
                        inputStyle={{ borderColor: "red" }}
                        inputFocusStyle={{ borderColor: "blue" }}
                        onComplete={(value, index) => {}}
                        autoSelect={true}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    /> */}
                </form>
                <Button sx={ButtonDalee}>Далее</Button>
                <Button sx={ButtonDalee}>Отправить другой код</Button>
            </Box>
        </Box>
    );
};

export default NextValid;

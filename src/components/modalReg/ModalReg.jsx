import React, { useState, useMemo } from "react";
import logoReg from "../../media/icons/header/Logo.svg";
import logoGoogle from "../../media/icons/header/Google Logo.svg";
import logoYandex from "../../media/icons/header/Yandex Logo.svg";
import { Box, Button, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import style from "./css/modalReg.module.scss";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import NextValid from "./nextValid/NextValid";

import {
    modalAddStyle,
    modalRegStyle,
    ButtonDalee,
    ButtonYandex,
    TextFieldEmail,
    ButtonGoogle,
} from "./modalStyle";
import RegValidation from "../regValidation/RegValidation";
import NextTwoValid from "./nextTwoValid/NextTwoValid";

export default function ModalReg() {
    const [nextOpen, setNextOpen] = useState(false);
    const [regOpen, setRegOpen] = useState(false);
    const [logOpen, setLogOpen] = useState(false);
    const [emailDirty, setEmailDirty] = useState(true);
    const locate = useLocation();
    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(false);
    const openModal = () => setModal(true);

    const modals = [
        <>
            {nextOpen ? (
                <NextValid /> || <NextTwoValid />
            ) : (
                <Box className={style.ModalBox}>
                    <Box className={style.ModalBoxInner}>
                        <img
                            src={logoReg}
                            alt='LogoReg'
                            className={style.ModalBoxInnerLogo}
                        />
                        <h3>
                            Введите почту, для создания <br /> аккаунта
                        </h3>
                        <form className={style.Buttons}>
                            <Button
                                style={{
                                    backgroundColor: regOpen ? "#bbb" : "#fff",
                                }}
                                variant='text'
                                onClick={() => {
                                    setLogOpen(false);
                                    setRegOpen(true);
                                }}
                            >
                                Регистрация
                            </Button>
                            <Button
                                style={{
                                    backgroundColor: logOpen ? "#bbb" : "#fff",
                                }}
                                variant='text'
                                onClick={() => {
                                    setRegOpen(false);
                                    setLogOpen(true);
                                }}
                            >
                                Вход
                            </Button>
                        </form>
                        {logOpen && (
                            <RegValidation
                                emailDirty={emailDirty}
                                setEmailDirty={setEmailDirty}
                            />
                        )}
                        {regOpen && (
                            <RegValidation
                                emailDirty={emailDirty}
                                setEmailDirty={setEmailDirty}
                            />
                        )}
                        <Button
                            onClick={() => setNextOpen(true)}
                            sx={ButtonDalee}
                            disabled={emailDirty}
                        >
                            Далее
                        </Button>
                        <p
                            style={{
                                color: "#5C5C5C",
                                textAlign: "center",
                                marginTop: "40px",
                            }}
                        >
                            Используйте соц.сеть для быстрой <br /> регистрации
                        </p>
                        <form className={style.SocialButtons}>
                            <a href='https://passport.yandex.ru/auth?mode=add-user&retpath=%2F%2Fyandex.ru%2Fsupport%2Fmail%2Fauth.html'>
                                <Button sx={ButtonYandex}>
                                    <img src={logoYandex} alt='Yandex' />
                                </Button>
                            </a>
                            <a href='https://accounts.google.com/v3/signin/identifier?dsh=S-234156958%3A1677016231186015&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1%26nlr%3D1&ec=GAlAwAE&hl=ru&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession'>
                                <Button sx={ButtonGoogle}>
                                    <img src={logoGoogle} alt='Google' />
                                </Button>
                            </a>
                        </form>
                    </Box>
                </Box>
            )}
        </>,
    ];
    return (
        <Box className={style.ModalStyle}>
            <Box>
                <Button variant='contain' sx={modalAddStyle}>
                    Добавить объявление
                </Button>
                <Button onClick={openModal} sx={modalRegStyle}>
                    Войти
                </Button>
            </Box>
            <Modal open={modal} onClose={closeModal}>
                {modals[0]}
            </Modal>
        </Box>
    );
}

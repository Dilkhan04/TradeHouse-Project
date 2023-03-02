import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { TextFieldEmail } from "../modalReg/modalStyle";

export default function RegValidation(props) {
    // Валидация
    const [agree, setAgree] = useState(false);
    const [valid, setValid] = useState(false);
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordType, setPasswordType] = useState("password");

    const { emailDirty, setEmailDirty } = props;
    //
    const emailHandler = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmail(email.target.value);
        if (!re.test(String(email.target.value).toLowerCase())) {
            if (email.target.value === "") {
                setAgree(true);
                setEmailDirty(true);
                setEmailError("");
            } else {
                setAgree(true);
                setEmailDirty(true);
                setEmailError(
                    "Электронная почта недействительна. Пожалуйста, повторите попытку."
                );
            }
        } else {
            setAgree(false);
            setEmailDirty(false);
            setEmailError("");
        }
    };
    const passwordHandler = (p) => {
        setPassword(p.target.value);
        const re = /(?=.*[!@#$%^&*?:";№,./'{}()+=_`~-])/g;
        if (!re.test(String(p.target.value).toLowerCase())) {
            if (p.target.value.length < 8) {
                setAgree(true);
                setPasswordDirty(true);
                setPasswordError("Пароль слишком короткий!");
            } else if (p.target.value.length > 32) {
                setAgree(true);
                setPasswordDirty(true);
                setPasswordError("Пароль слишком длинный!");
            } else {
                setAgree(false);
                setPasswordDirty(false);
                setPasswordError("");
            }
        } else {
            setAgree(true);
            setPasswordDirty(true);
            setPasswordError("Пароль не должен содержать сторонних символов!");
        }
    };

    const blurHandler = (e) => {
        e.target.name === "email"
            ? email === ""
                ? setEmailDirty(true) ||
                  setEmailError("Поле заполнения пустое!")
                : setEmailError("")
            : e.target.name === "password" && password === ""
            ? setPasswordDirty(true) ||
              setPasswordError("Поле заполнения пустое!")
            : setPasswordError("");
        setEmailValid(true);
        setPasswordValid(true);
    };
    const viewPassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
        } else if (passwordType === "text") {
            setPasswordType("password");
        }
    };
    useEffect(() => {
        if (emailDirty || passwordDirty) {
            setValid(true);
        } else if (!emailDirty && !passwordDirty && !checked) {
            setValid(false);
        }
    }, [email, password]);
    return (
        <>
            <TextField
                type='email'
                placeholder='Email'
                name='email'
                onClick={() => setEmailValid(false)}
                onChange={emailHandler}
                onBlur={blurHandler}
                value={email}
                error={emailDirty}
                helperText={emailError}
                label='Электронная почта*'
                InputProps={{ disableUnderline: emailValid }}
                variant='standard'
                sx={TextFieldEmail}
            />
        </>
    );
}

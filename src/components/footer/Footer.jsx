import React from "react";
import { Box } from "@mui/material";
import style from "./css/footer.module.scss";

export default function Footer() {
    return (
        <Box className={style.Footer}>
            <Box className='container'>
                <Box classname={style.FooterInner}>
                    <Box classname={style.FooterInnerOne}>
                        <Box className={style.OneBox}>
                            <ul>
                                <li>Недвижимость</li>
                                <li>Квартиры</li>
                                <li>Новостройки</li>
                                <li>Дома</li>
                                <li>Аренда</li>
                            </ul>
                            <ul>
                                <li>Комнатность</li>
                                <li>Однокомнатные</li>
                                <li>Двухкомнатные</li>
                                <li>Трехкомнатные</li>
                                <li>Многокомнатные</li>
                                <li>Студии</li>
                            </ul>
                        </Box>
                        <Box className={style.TwoBox}></Box>
                    </Box>
                    <Box classname={style.FooterInnerTwo}></Box>
                </Box>
            </Box>
        </Box>
    );
}

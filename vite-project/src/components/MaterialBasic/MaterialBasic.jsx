/**@jsxImportSource @emotion/react */
import{css} from '@emotion/react';
import styles from './MaterialBasic.module.css';
import {Button} from '@mui/material';

export default function MaterialBasic(){

    const font = css`
        text-transform: none;
        `;

    return(
        <>
            <Button variant='text' color='secondary' css={font}>text</Button> 
            <Button variant='contained' color='seondary'>コンテインド</Button> 
            <Button variant='outlined' color='seondary'>アウトラインド</Button> 
        </>
    )
}
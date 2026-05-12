import { useState } from 'react'
import styles from './ModuleButton.module.css'

export default function ModuleButton(){
    
        const [isDone , setIsDone] = useState(false)

        const handleClick = () =>{
            setIsDone(true);
        }

    return(
        <>
            <button onClick={handleClick}
            className={`${styles.done} ${isDone ? styles.button : styles.add}`}>
                押してね
            </button>
        </>
    )
    
}

// 2つ以上のクラス属性を付与する場合はテンプレートリテラルで書いて下さい
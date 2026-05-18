import { useEffect , useState } from 'react';
import styles from './HookTimer.module.css'

export default function HookTimer( {init} ){
    const [count , setCount] = useState(init);

    useEffect(() => {
        const t = setInterval(() => {
            setCount(c => c - 1);
        }, 1000);

        return () => {
            clearInterval(t);
        }
    },[]);

    return(
        <div className={count < 0 ? styles.worn : ''}>
            現在のカウント: {count}
        </div>
    );

}
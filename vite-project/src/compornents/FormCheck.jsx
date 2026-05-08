import { useState } from "react";


export default function FormCheck(){

    const [form , setForm] = useState({
        comment:`様々なフォーム要素を…`
    });

    const handleForm = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () =>{
        console.log(`同意確認:${form.agreement ? '同意' : '反対'}`);
    };

    return(
        <form>
            <label htmlFor="agreement">コメント:</label>
            <br />
            <input name="checkbox" id="agreement" type="checkbox" 
            checked={form.agreement} onChange={handleForm}></input>
            <br />
            <button tipe="button" onClick={show}>
            送信</button>
        </form>
    );
}

import { useState } from "react";


export default function FormtRadio(){

    const [form , setForm] = useState({
        os:'windows'
    });

    const handleForm = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () =>{
        console.log(`使用os:${form.os}`);
    };

    return(
        <form>
            <fieldset>
                <legend>使用OS</legend>
                <label htmlFor="os_win">Windows</label>
                <input type="radio" name="os" id="os_win" value="windows"
                checked={form.os === 'windows'} onChange={handleForm} />
                <br />

                <label htmlFor="os_win">macOS</label>
                <input type="radio" name="os" id="os_mac" value="mac"
                checked={form.os === 'mac'} onChange={handleForm} />
                <br />

                <label htmlFor="os_win">Linux</label>
                <input type="radio" name="os" id="os_lin" value="linux"
                checked={form.os === 'linux'} onChange={handleForm} />
                <br />
                </fieldset>
            
            
            <button tipe="button" onClick={show}>
            送信</button>
        </form>
    );
}

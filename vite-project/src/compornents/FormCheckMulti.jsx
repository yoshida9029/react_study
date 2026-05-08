import { useState } from "react";


export default function FormCheckMulti(){

    const [form , setForm] = useState({
        animal:['dog' , 'hamster']
    });

    const handleForm = e =>{
        const fa = [...form.animal];

        if(e.target.checked){
            fa.push(e.target.value);
        }else{
            fa.splice(fa.indexOf(e.target.value), 1);
        }

        setForm({
            ...form,
            [e.target.name]:fa
        });
    };

    const show = () =>{
        console.log(`好きな動物:${form.animal}`);
    };

    return(
        <form>
            <fieldset>
                <legend>好きな動物：</legend>
                <label htmlFor="animal_dog">イヌ</label>
                <input type="checkbox" name="animal"
                id="animal_dog" value="dog" checked={form.animal.includes('dog')}
                onChange={handleForm}/>
                <br />
                
                <label htmlFor="animal_cat">ネコ</label>
                <input type="checkbox" name="animal"
                id="animal_cat" value="cat" checked={form.animal.includes('cat')} 
                onChange={handleForm}/>
                <br />

                <label htmlFor="animal_hamster">ハムスター</label>
                <input type="checkbox" name="animal"
                id="animal_hamster" value="hamster" checked={form.animal.includes('hamster')}
                onChange={handleForm}/>
                <br />

                <label htmlFor="animal_rabbit">ウサギ</label>
                <input type="checkbox" name="animal"
                id="animal_rabbit" value="rabbit" checked={form.animal.includes('rabbit')}
                onChange={handleForm}/>
                <br />

            </fieldset>
            <button tipe="button" onClick={show}>
            送信</button>
        </form>
    );
}

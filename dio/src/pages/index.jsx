import { useState, useEffect, useMemo } from "react";

const Teste = () => {
    
    const [age, setAge] = useState(26);

    const handleChangeName = () => {
        setAge(prev => prev === 26 ? 32 : 26);
    }

    useMemo(() => {
        console.log('Calculou', age);
    }, [age]);

    useEffect(()=>{
        alert(`Renderizou ${age}`);
    },[age]);

    return (
        <div>
            <p>
                {age}
            </p>
            <button onClick={handleChangeName}> Alterar</button>
        </div>
    )
}

export { Teste };
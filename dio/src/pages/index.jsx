import { useState, useCallback } from "react";

const Teste = () => {
    
    const [name, setName] = useState('Fábio');
    const [age, setAge] = useState(26);

    // useMemo = referência em variáveis (const, var, let).
    // useCallback = referência em função.

    const handleChangeName = useCallback(() => {
        console.log('Alterou nome');
        setName(prev => prev === 'Fábio' ? 'Portella' : 'Fábio');
    }, []);

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log(`Idade atual - ${age} - ${newAge}`)
        setAge(prev => prev === 38 ? 52 : 38)
    }, [age]);

    return (
        <div>            
            <p>
                Nome: {name}
            </p>
            <p><br />
                Idade: {age}
            </p><br />
            <button onClick={handleChangeAge}> Alterar Idade</button>
            <br />
            <button onClick={handleChangeName}> Alterar Nome</button>
        </div>
    )
}

export { Teste };
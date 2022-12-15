import { useState } from "react";

const Teste = () => {
    const [name, setName] = useState('Fábio');

    const handleChangeName = () => {
        setName(prev => prev === 'Fábio' ? 'Portella' : 'Fábio')
    }

    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}> Alterar</button>
        </div>
    )
}

export { Teste };
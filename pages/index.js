import { useState } from "react";

function Home() {

    return <div>
        <div className="home">
            Home
        </div>
        <Contador />
    </div>
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div className="box">
                {contador}
            </div>
            <p></p>
            <div className="box">
                <button className="success" onClick={adicionarContador}>Adicionar</button>
            </div>
            <footer>
                Um contador hospedado na Vercel
            </footer>
        </div>
    )
}
export default Home;
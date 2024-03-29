import { useState } from "react";

function Home() {

    return <div>
        <div className="home">
            Home
        </div>
        <Counter />
    </div>
}

function Counter() {
  const [count, setCount] = useState(1);

  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <div className="box">{count}</div>
      <div className="box">
        <button className="success" onClick={incrementCount}>
          Contar
        </button>
      </div>
    </div>
  );
}
export default Home;
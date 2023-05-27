import "./App.css";
import { useState, useEffect } from "react";
import { lawnSetter } from "./logics/lawnSetter";
import Area from "./components/Area/index";

function App() {
  const [data, setData] = useState(null);
  const [lawn, setLawn] = useState({ x: 0, y: 0 });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const fileContent = e.target.result;
      setData(fileContent);
    };

    reader.readAsText(file);
  };

  useEffect(() => {
    if (data) {
      const dimensions = lawnSetter(data[0], data[1]);
      const lawnCopy = { ...dimensions };
      setLawn(lawnCopy);
    }
  }, [data]);

  console.log("lawn:", lawn);

  return (
    <div className="App">
      <input type="file" onChange={handleFileChange} />
      <h2>Les instructions :</h2>
      <div>{data}</div>
      {lawn && <Area lawn={lawn} data={data} />}
    </div>
  );
}

export default App;

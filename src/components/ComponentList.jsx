import React, { useEffect, useState } from "react";
import { getComponents } from "../services/api";

const ComponentList = () => {

  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setComponents(getComponents());
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <h3>Components</h3>

      {components.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelected(item.id)}
          style={{
            padding: "8px",
            marginBottom: "5px",
            cursor: "pointer",
            background: selected === item.id ? "#d0e6ff" : "#f4f4f4"
          }}
        >
          {item.name}
        </div>
      ))}

    </div>
  );
};

export default ComponentList;
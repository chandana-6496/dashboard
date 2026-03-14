import React, { useState } from "react";
import UploadBox from "../Components/UploadBox";
import DiagramViewer from "../Components/DiagramViewer";
import ComponentList from "../Components/ComponentList";

const Dashboard = () => {

  const [image, setImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handleUpload = (file, url) => {
    setImage(url);
    setZoom(1);
  };

  const zoomIn = () => setZoom(zoom + 0.2);
  const zoomOut = () => setZoom(zoom - 0.2);
  const resetZoom = () => setZoom(1);

  return (
    <div style={{ padding: "20px" }}>

      <h1 style={{ textAlign: "center" }}>Diagram Dashboard</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <UploadBox onUpload={handleUpload} />
      </div>

      <div style={{ display: "flex", gap: "20px" }}>

        <div style={{ flex: 2, border: "1px solid #ccc" }}>
          <DiagramViewer
            image={image}
            zoom={zoom}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            resetZoom={resetZoom}
          />
        </div>

        <div style={{ flex: 1, border: "1px solid #ccc" }}>
          <ComponentList />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
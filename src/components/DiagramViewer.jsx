import React from "react";

const DiagramViewer = ({ image, zoom, zoomIn, zoomOut, resetZoom }) => {

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>

      <h3>Diagram Viewer</h3>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={resetZoom}>Reset</button>
      </div>

      {image && (
        <img
          src={image}
          alt="diagram"
          width="400"
          style={{
            transform: `scale(${zoom})`,
            transition: "0.3s"
          }}
        />
      )}

    </div>
  );
};

export default DiagramViewer;
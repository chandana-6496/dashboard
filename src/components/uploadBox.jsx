import React from "react";

const UploadBox = ({ onUpload }) => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onUpload(file, imageUrl);
    }
  };

  return (
    <div style={{marginBottom:"20px"}}>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadBox;
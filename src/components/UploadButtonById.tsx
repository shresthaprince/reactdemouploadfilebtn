import React, { useState, useEffect } from "react";

function UploadButtonById() {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [inputFile, setInputFile] = useState<HTMLInputElement | null>(null);
  useEffect(() => {
    setInputFile(document.getElementById("input-file") as HTMLInputElement);
  }, []);

  const handleUpload = () => {
    inputFile?.click();
  };
  const handleDisplayFileDetails = () => {
    inputFile?.files && setUploadedFileName(inputFile.files[0].name);
  };
  return (
    <div className="m-3">
      <label className="mx-3">Choose file: </label>
      <input
        id="input-file"
        onChange={handleDisplayFileDetails}
        className="d-none"
        type="file"
      />
      <button
        onClick={handleUpload}
        className={`btn btn-outline-${
          uploadedFileName ? "success" : "primary"
        }`}
      >
        {uploadedFileName ? uploadedFileName : "Upload"}
      </button>
    </div>
  );
}

export default UploadButtonById;

// src/components/resume/UploadTemplate.jsx
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const UploadTemplate = ({ onUpload }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onUpload(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center">
      <div className="mb-4">
        <p className="text-gray-600 mb-2">Upload a custom PDF template</p>
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-blue-600 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <Input
            type="file"
            accept=".pdf,.docx"
            className="hidden"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <Button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Choose Template File
          </Button>
          {fileName && (
            <p className="mt-2 text-sm text-gray-600">Selected: {fileName}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadTemplate;

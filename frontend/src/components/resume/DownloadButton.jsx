// src/components/resume/DownloadButton.jsx
import React from "react";
import { Button } from "../ui/button";

const DownloadButton = ({ onDownload }) => {
  return (
    <Button
      onClick={onDownload}
      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download Resume
    </Button>
  );
};

export default DownloadButton;

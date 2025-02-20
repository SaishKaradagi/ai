// src/pages/ResumeBuilder/ResumeEditor.jsx
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import ResumeForm from "../../components/resume/ResumeForm";

const ResumeEditor = ({
  template,
  resumeData,
  onUpdateData,
  onPreview,
  onBack,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Edit Your Resume</h2>
        <div className="space-x-4">
          <Button variant="outline" onClick={onBack}>
            Back to Templates
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={onPreview}
          >
            Preview Resume
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ResumeForm resumeData={resumeData} onUpdateData={onUpdateData} />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-4">Selected Template</h3>
          <div className="aspect-[8.5/11] bg-white border shadow-sm">
            {/* Template preview would go here */}
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                {template.name} template selected
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;

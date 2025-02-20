// src/pages/ResumeBuilder/PreviewResume.jsx
import React from "react";
import { Button } from "../../components/ui/button";
import DownloadButton from "../../components/resume/DownloadButton";

const PreviewResume = ({ template, resumeData, onBack }) => {
  // Generate PDF from the resume data and template
  const generatePDF = () => {
    // PDF generation logic would go here using a library like jsPDF or react-pdf
    console.log("Generating PDF with data:", resumeData);
    alert("PDF generation triggered");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Preview Your Resume</h2>
        <div className="space-x-4">
          <Button variant="outline" onClick={onBack}>
            Back to Editor
          </Button>
          <DownloadButton onDownload={generatePDF} />
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg flex justify-center">
        <div className="bg-white shadow-lg w-full max-w-[850px] aspect-[8.5/11] p-8 overflow-auto">
          {/* Resume preview content */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">
              {resumeData.personalInfo.name}
            </h1>
            <div className="text-gray-600 flex justify-center space-x-4 mt-2">
              {resumeData.personalInfo.email && (
                <span>{resumeData.personalInfo.email}</span>
              )}
              {resumeData.personalInfo.phone && (
                <span>{resumeData.personalInfo.phone}</span>
              )}
              {resumeData.personalInfo.location && (
                <span>{resumeData.personalInfo.location}</span>
              )}
            </div>
          </div>

          {resumeData.personalInfo.summary && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">
                Summary
              </h2>
              <p>{resumeData.personalInfo.summary}</p>
            </div>
          )}

          {resumeData.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-3">
                Education
              </h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{edu.institution}</h3>
                    <span className="text-gray-600">{edu.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      {edu.degree} in {edu.field}
                    </p>
                    <span className="text-gray-600">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {resumeData.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-3">
                Experience
              </h2>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{exp.position}</h3>
                    <span className="text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-800">{exp.company}</p>
                    <span className="text-gray-600">{exp.location}</span>
                  </div>
                  <p className="mt-1 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {resumeData.skills.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">
                Skills
              </h2>
              <div className="flex flex-wrap">
                {resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewResume;

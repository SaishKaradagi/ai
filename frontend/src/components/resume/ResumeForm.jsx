// src/components/resume/ResumeForm.jsx
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const ResumeForm = ({ resumeData, onUpdateData }) => {
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    onUpdateData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value,
      },
    });
  };

  const addEducation = () => {
    onUpdateData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          institution: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          location: "",
        },
      ],
    });
  };

  const updateEducation = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };

    onUpdateData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const addExperience = () => {
    onUpdateData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      ],
    });
  };

  const updateExperience = (index, field, value) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };

    onUpdateData({
      ...resumeData,
      experience: updatedExperience,
    });
  };

  const addSkill = () => {
    onUpdateData({
      ...resumeData,
      skills: [...resumeData.skills, ""],
    });
  };

  const updateSkill = (index, value) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = value;

    onUpdateData({
      ...resumeData,
      skills: updatedSkills,
    });
  };

  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-medium mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={resumeData.personalInfo.name}
              onChange={handlePersonalInfoChange}
              placeholder="John Doe"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={resumeData.personalInfo.email}
              onChange={handlePersonalInfoChange}
              placeholder="john.doe@example.com"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={resumeData.personalInfo.phone}
              onChange={handlePersonalInfoChange}
              placeholder="(123) 456-7890"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={resumeData.personalInfo.location}
              onChange={handlePersonalInfoChange}
              placeholder="New York, NY"
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="summary">Professional Summary</Label>
          <textarea
            id="summary"
            name="summary"
            value={resumeData.personalInfo.summary}
            onChange={handlePersonalInfoChange}
            rows={4}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="A brief summary of your professional background and goals"
          />
        </div>
      </div>

      {/* Education */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Education</h3>
          <Button
            type="button"
            onClick={addEducation}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add Education
          </Button>
        </div>

        {resumeData.education.map((edu, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor={`institution-${index}`}>Institution</Label>
                <Input
                  id={`institution-${index}`}
                  value={edu.institution}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  placeholder="University Name"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor={`degree-${index}`}>Degree</Label>
                <Input
                  id={`degree-${index}`}
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  placeholder="Bachelor of Science"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor={`field-${index}`}>Field of Study</Label>
                <Input
                  id={`field-${index}`}
                  value={edu.field}
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                  placeholder="Computer Science"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor={`location-${index}`}>Location</Label>
                <Input
                  id={`location-${index}`}
                  value={edu.location}
                  onChange={(e) =>
                    updateEducation(index, "location", e.target.value)
                  }
                  placeholder="City, State"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input
                  id={`startDate-${index}`}
                  value={edu.startDate}
                  onChange={(e) =>
                    updateEducation(index, "startDate", e.target.value)
                  }
                  placeholder="MM/YYYY"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor={`endDate-${index}`}>
                  End Date (or Expected)
                </Label>
                <Input
                  id={`endDate-${index}`}
                  value={edu.endDate}
                  onChange={(e) =>
                    updateEducation(index, "endDate", e.target.value)
                  }
                  placeholder="MM/YYYY or Present"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Work Experience</h3>
          <Button
            type="button"
            onClick={addExperience}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add Experience
          </Button>
        </div>

        {resumeData.experience.map((exp, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor={`company-${index}`}>Company</Label>
                <Input
                  id={`company-${index}`}
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(index, "company", e.target.value)
                  }
                  placeholder="Company Name"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor={`position-${index}`}>Position</Label>
                <Input
                  id={`position-${index}`}
                  value={exp.position}
                  onChange={(e) =>
                    updateExperience(index, "position", e.target.value)
                  }
                  placeholder="Software Engineer"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor={`expLocation-${index}`}>Location</Label>
                <Input
                  id={`expLocation-${index}`}
                  value={exp.location}
                  onChange={(e) =>
                    updateExperience(index, "location", e.target.value)
                  }
                  placeholder="City, State"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor={`expDescription-${index}`}>Description</Label>
                <textarea
                  id={`expDescription-${index}`}
                  value={exp.description}
                  onChange={(e) =>
                    updateExperience(index, "description", e.target.value)
                  }
                  rows={3}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your responsibilities and achievements"
                />
              </div>
              <div>
                <Label htmlFor={`expStartDate-${index}`}>Start Date</Label>
                <Input
                  id={`expStartDate-${index}`}
                  value={exp.startDate}
                  onChange={(e) =>
                    updateExperience(index, "startDate", e.target.value)
                  }
                  placeholder="MM/YYYY"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor={`expEndDate-${index}`}>End Date</Label>
                <Input
                  id={`expEndDate-${index}`}
                  value={exp.endDate}
                  onChange={(e) =>
                    updateExperience(index, "endDate", e.target.value)
                  }
                  placeholder="MM/YYYY or Present"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Skills</h3>
          <Button
            type="button"
            onClick={addSkill}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add Skill
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData.skills.map((skill, index) => (
            <div key={index}>
              <Input
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
                placeholder="e.g., JavaScript"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaRegTrashCan } from "react-icons/fa6";

type EducationDetailsProps = {
  data: any[];
  updateData: (data: any[]) => void;
};

export default function EducationDetails({
  data,
  updateData,
}: EducationDetailsProps) {
  // Initialize the state with one empty education entry
  const [education, setEducation] = useState(
    data.length ? data : [{ institution: "", degree: "", graduationYear: "" }]
  );

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedEducation = education.map((edu, i) => {
      if (i === index) {
        return { ...edu, [e.target.name]: e.target.value };
      }
      return edu;
    });
    setEducation(updatedEducation);
    updateData(updatedEducation);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { institution: "", degree: "", graduationYear: "" },
    ]);
  };

  const removeEducation = (index: number) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
    updateData(updatedEducation);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Education Details</h2>
      {education.map((edu, index) => (
        <div key={index} className="space-y-2 p-4 border rounded relative">
          {/* Remove button */}
          {education.length > 1 && (
              <div className="absolute top-3 right-3 cursor-pointer text-red-500">
                <FaRegTrashCan onClick={() => removeEducation(index)}/>
              </div>
          )}

          <div>
            <Label htmlFor={`institution-${index}`}>Institution</Label>
            <Input
              id={`institution-${index}`}
              name="institution"
              value={edu.institution}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`degree-${index}`}>Degree</Label>
            <Input
              id={`degree-${index}`}
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor={`graduationYear-${index}`}>Graduation Year</Label>
            <Input
              id={`graduationYear-${index}`}
              name="graduationYear"
              type="number"
              value={edu.graduationYear}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`graduationYear-${index}`}>CGPA/Percentage</Label>
            <Input
              id={`percentage-${index}`}
              name="percentage"
              type="number"
              value={edu.percentage}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          </div>
        </div>
      ))}

      <Button onClick={addEducation} className="bg-orange text-white">Add Education</Button>
    </div>
  );
}

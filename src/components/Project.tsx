import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaRegTrashCan } from "react-icons/fa6";

type ProjectsProps = {
  data: any[];
  updateData: (data: any[]) => void;
};

export default function Projects({ data, updateData }: ProjectsProps) {
  const [projects, setProjects] = useState(
    data.length
      ? data
      : [{ name: "", description: "", technologies: "", link: "" }]
  );

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedProjects = projects.map((project, i) => {
      if (i === index) {
        return { ...project, [e.target.name]: e.target.value };
      }
      return project;
    });
    setProjects(updatedProjects);
    updateData(updatedProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { name: "", description: "", technologies: "", link: "" },
    ]);
  };

  const removeProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    updateData(updatedProjects);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="space-y-2 p-4 border rounded relative">
          {projects.length > 1 && (
            <div className="absolute top-3 right-3 cursor-pointer text-red-500">
              <FaRegTrashCan onClick={() => removeProject(index)} />
            </div>
          )}
          <div>
            <Label htmlFor={`projectName-${index}`}>Project Name</Label>
            <Input
              id={`projectName-${index}`}
              name="name"
              value={project.name}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`projectDescription-${index}`}>Description</Label>
            <Textarea
              id={`projectDescription-${index}`}
              name="description"
              value={project.description}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`projectTechnologies-${index}`}>
              Technologies Used
            </Label>
            <Input
              id={`projectTechnologies-${index}`}
              name="technologies"
              value={project.technologies}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`projectLink-${index}`}>Project Link</Label>
            <Input
              id={`projectLink-${index}`}
              name="link"
              type="url"
              value={project.link}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        </div>
      ))}
      <Button onClick={addProject}className="bg-orange text-white">Add Project</Button>
    </div>
  );
}

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FaRegTrashCan } from 'react-icons/fa6'

type ExperienceDetailsProps = {
  data: any[]
  updateData: (data: any[]) => void
}

export default function ExperienceDetails({ data, updateData }: ExperienceDetailsProps) {
  const [experience, setExperience] = useState(
    data.length ? data : [{ company: "", position: "", startDate: "", endDate: "", responsibilities: "" }]
  )

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedExperience = experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, [e.target.name]: e.target.value }
      }
      return exp
    })
    setExperience(updatedExperience)
    updateData(updatedExperience)
  }

  const addExperience = () => {
    setExperience([...experience, { company: '', position: '', startDate: '', endDate: '', responsibilities: '' }])
  }

  const removeExperience = (index: number) => {
    const updatedExperience = experience.filter((_, i) => i !== index)
    setExperience(updatedExperience)
    updateData(updatedExperience)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Experience Details</h2>
      {experience.map((exp, index) => (
        <div key={index} className="space-y-2 p-4 border rounded relative">
          <div>
            <Label htmlFor={`company-${index}`}>Company</Label>
            <Input
              id={`company-${index}`}
              name="company"
              value={exp.company}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`position-${index}`}>Position</Label>
            <Input
              id={`position-${index}`}
              name="position"
              value={exp.position}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor={`startDate-${index}`}>Start Date</Label>
              <Input
                id={`startDate-${index}`}
                name="startDate"
                type="date"
                value={exp.startDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div>
              <Label htmlFor={`endDate-${index}`}>End Date</Label>
              <Input
                id={`endDate-${index}`}
                name="endDate"
                type="date"
                value={exp.endDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          </div>
          <div>
            <Label htmlFor={`responsibilities-${index}`}>Responsibilities</Label>
            <Textarea
              id={`responsibilities-${index}`}
              name="responsibilities"
              value={exp.responsibilities}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          {/* Remove button */}
          {experience.length > 1 && (
              <div className="absolute top-1 right-3 cursor-pointer text-red-500">
              <FaRegTrashCan onClick={() => removeExperience(index)}/>
            </div>
          )}
        </div>
      ))}
      <Button onClick={addExperience}className="bg-orange text-white">Add Experience</Button>
    </div>
  )
}

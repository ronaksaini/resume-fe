import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type SkillsProps = {
  data: string[]
  updateData: (data: string[]) => void
}

export default function Skills({ data, updateData }: SkillsProps) {
  const [skills, setSkills] = useState(data)
  const [newSkill, setNewSkill] = useState('')

  const addSkill = () => {
    if (newSkill.trim()) {
      // Split input by commas, trim whitespace, and filter out empty values
      const newSkillsArray = newSkill.split(',').map(skill => skill.trim()).filter(skill => skill)
      const updatedSkills = [...skills, ...newSkillsArray]
      setSkills(updatedSkills)
      updateData(updatedSkills)
      setNewSkill('')  // Clear the input
    }
  }

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index)
    setSkills(updatedSkills)
    updateData(updatedSkills)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="flex space-x-2">
        <div className="flex-grow">
          <Label htmlFor="newSkill" className="sr-only">New Skill</Label>
          <Input
            id="newSkill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter skills separated by commas"
          />
        </div>
        <Button onClick={addSkill} className="bg-orange text-white">Add Skill</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#ff875b25]  text-orange px-2 py-1 rounded flex items-center">
            <span>{skill}</span>
            <button onClick={() => removeSkill(index)} className="ml-2 text-orange hover:scale-125">
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

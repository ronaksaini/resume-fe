import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import Stepper from './Stepper'
import PersonalDetails from './Personal'
import EducationDetails from './Education'
import ExperienceDetails from './Experience'
import Skills from './Skill'
import Projects from './Project'
import Achievements from './Achievement'
import Certifications from './Certification'
import Template1 from '@/templates/template1'

type Step = 'personal' | 'education' | 'experience' | 'skills' | 'projects' | 'achievements' | 'certifications'

export default function FormComponent() {
  const [currentStep, setCurrentStep] = useState<Step>('personal')
  const [resumeData, setResumeData] = useState({
    personal: {},
    education: [],
    experience: [],
    skills: [],
    projects: [],
    achievements: [],
    certifications: []
  })


  console.log("formData---",resumeData)
  const steps: Step[] = ['personal', 'education', 'experience', 'skills', 'projects', 'achievements', 'certifications']

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const handlePrevious = () => {
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  const updateResumeData = (step: Step, data: any) => {
    setResumeData(prevData => ({
      ...prevData,
      [step]: data
    }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 'personal':
        return <PersonalDetails data={resumeData.personal} updateData={(data) => updateResumeData('personal', data)} />
      case 'education':
        return <EducationDetails data={resumeData.education} updateData={(data) => updateResumeData('education', data)} />
      case 'experience':
        return <ExperienceDetails data={resumeData.experience} updateData={(data) => updateResumeData('experience', data)} />
      case 'skills':
        return <Skills data={resumeData.skills} updateData={(data) => updateResumeData('skills', data)} />
      case 'projects':
        return <Projects data={resumeData.projects} updateData={(data) => updateResumeData('projects', data)} />
      case 'achievements':
        return <Achievements data={resumeData.achievements} updateData={(data) => updateResumeData('achievements', data)} />
      case 'certifications':
        return <Certifications data={resumeData.certifications} updateData={(data) => updateResumeData('certifications', data)} />
      default:
        return null
    }
  }

  return (
    <div className="relative container mx-auto px-4 py-2 min-h-[100dvh]">
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="mt-16 w-[550px] mx-auto z-10">{renderStep()}</div>
      <div className="mt-4 flex justify-between sticky bottom-0 bg-white py-4">
        <Button onClick={handlePrevious} disabled={currentStep === 'personal'} className='bg-orange text-white'>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={currentStep === 'certifications'} className='bg-orange text-white'>
          Next
        </Button>
      </div>
      {/* <Template1 userData={resumeData}/> */}
    </div>
  )
}
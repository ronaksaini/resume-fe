import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type PersonalDetailsProps = {
  data: any
  updateData: (data: any) => void
}

export default function PersonalDetails({ data, updateData }: PersonalDetailsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Personal Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={data.firstName || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={data.lastName || ''}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={data.email || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={data.phone || ''}
          onChange={handleChange}
        />
      </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={data.address || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          value={data.title || ''}
          onChange={handleChange}
        />
      </div>
      </div>
      <div>
        <Label htmlFor="linkedin">LinkedIn Profile Link</Label>
        <Input
          id="linkedin"
          name="linkedin"
          type="text"
          value={data.linkedin || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="github">GitHub Profile Link</Label>
        <Input
          id="github"
          name="github"
          type="text"
          value={data.github || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="otherlink">Other Link</Label>
        <Input
          id="otherlink"
          name="otherlink"
          type="text"
          value={data.otherlink || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
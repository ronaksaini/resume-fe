import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaRegTrashCan } from "react-icons/fa6";

type CertificationsProps = {
  data: any[];
  updateData: (data: any[]) => void;
};

export default function Certifications({
  data,
  updateData,
}: CertificationsProps) {
  const [certifications, setCertifications] = useState(
    data.length ? data : [{ name: "", issuer: "", date: "", expiryDate: "" }]
  );

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedCertifications = certifications.map((cert, i) => {
      if (i === index) {
        return { ...cert, [e.target.name]: e.target.value };
      }
      return cert;
    });
    setCertifications(updatedCertifications);
    updateData(updatedCertifications);
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      { name: "", issuer: "", date: "", expiryDate: "" },
    ]);
  };

  const removeCertification = (index: number) => {
    const updatedCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCertifications);
    updateData(updatedCertifications);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Certifications</h2>
      {certifications.map((cert, index) => (
        <div key={index} className="space-y-2 p-4 border rounded relative">
          {certifications.length > 1 && (
            <div className="absolute top-3 right-3 cursor-pointer text-red-500">
              <FaRegTrashCan onClick={() => removeCertification(index)} />
            </div>
          )}
          <div>
            <Label htmlFor={`certName-${index}`}>Certification Name</Label>
            <Input
              id={`certName-${index}`}
              name="name"
              value={cert.name}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`certIssuer-${index}`}>Issuer</Label>
            <Input
              id={`certIssuer-${index}`}
              name="issuer"
              value={cert.issuer}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`certDate-${index}`}>Date Issued</Label>
            <Input
              id={`certDate-${index}`}
              name="date"
              type="date"
              value={cert.date}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`certExpiryDate-${index}`}>
              Expiry Date (if applicable)
            </Label>
            <Input
              id={`certExpiryDate-${index}`}
              name="expiryDate"
              type="date"
              value={cert.expiryDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        </div>
      ))}
      <Button onClick={addCertification} className="bg-orange text-white">
        Add Certification
      </Button>
    </div>
  );
}

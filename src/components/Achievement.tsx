import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaRegTrashCan } from "react-icons/fa6";

type AchievementsProps = {
  data: any[];
  updateData: (data: any[]) => void;
};

export default function Achievements({ data, updateData }: AchievementsProps) {
  const [achievements, setAchievements] = useState(
    data.length ? data : [{ title: "", description: "", date: "" }]
  );

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedAchievements = achievements.map((achievement, i) => {
      if (i === index) {
        return { ...achievement, [e.target.name]: e.target.value };
      }
      return achievement;
    });
    setAchievements(updatedAchievements);
    updateData(updatedAchievements);
  };

  const addAchievement = () => {
    setAchievements([
      ...achievements,
      { title: "", description: "", date: "" },
    ]);
  };

  const removeAchievement = (index: number) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
    updateData(updatedAchievements);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Achievements</h2>
      {achievements.map((achievement, index) => (
        <div key={index} className="space-y-2 p-4 border rounded relative">
          {achievements.length > 1 && (
            <div className="absolute top-3 right-3 cursor-pointer text-red-500">
              <FaRegTrashCan onClick={() => removeAchievement(index)} />
            </div>
          )}
          <div>
            <Label htmlFor={`achievementTitle-${index}`}>
              Achievement Title
            </Label>
            <Input
              id={`achievementTitle-${index}`}
              name="title"
              value={achievement.title}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`achievementDescription-${index}`}>
              Description
            </Label>
            <Textarea
              id={`achievementDescription-${index}`}
              name="description"
              value={achievement.description}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <Label htmlFor={`achievementDate-${index}`}>Date</Label>
            <Input
              id={`achievementDate-${index}`}
              name="date"
              type="date"
              value={achievement.date}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        </div>
      ))}
      <Button onClick={addAchievement} className="bg-orange text-white">
        Add Achievement
      </Button>
    </div>
  );
}

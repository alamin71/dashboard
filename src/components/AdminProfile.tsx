import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function AdminProfile() {
  const [profile, setProfile] = useState({
    name: "John Admin",
    email: "admin@example.com",
    bio: "Super admin for the platform",
    profileImage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated profile:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold">Admin Profile</h2>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" value={profile.name} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" value={profile.email} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" name="bio" value={profile.bio} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="profileImage">Profile Image</Label>
        <Input
          id="profileImage"
          type="file"
          accept="image/*"
          onChange={(e) =>
            setProfile({ ...profile, profileImage: e.target.files?.[0]?.name || "" })
          }
        />
        {profile.profileImage && (
          <p className="text-sm text-gray-500">Selected: {profile.profileImage}</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Update Profile
      </Button>
    </form>
  );
}

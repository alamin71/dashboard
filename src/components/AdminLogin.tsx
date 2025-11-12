import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function AdminLogin() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Admin Login</h2>
      <div>
        <Label>Email</Label>
        <Input type="email" placeholder="admin@example.com" />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" placeholder="********" />
      </div>
      <Button className="w-full mt-4">Login</Button>
    </div>
  );
}

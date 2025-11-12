import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ResetPassword() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Reset Password</h2>
      <div>
        <Label>New Password</Label>
        <Input type="password" placeholder="********" />
      </div>
      <div>
        <Label>Confirm Password</Label>
        <Input type="password" placeholder="********" />
      </div>
      <Button className="w-full mt-4">Reset Password</Button>
    </div>
  );
}

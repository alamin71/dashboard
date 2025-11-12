import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ForgotPassword() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Forgot Password</h2>
      <div>
        <Label>Email</Label>
        <Input type="email" placeholder="admin@example.com" />
      </div>
      <Button className="w-full mt-4">Send Reset Link</Button>
    </div>
  );
}

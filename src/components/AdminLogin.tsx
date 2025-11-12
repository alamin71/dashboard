// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";

// export default function AdminLogin() {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">Admin Login</h2>
//       <div>
//         <Label>Email</Label>
//         <Input type="email" placeholder="admin@example.com" />
//       </div>
//       <div>
//         <Label>Password</Label>
//         <Input type="password" placeholder="********" />
//       </div>
//       <Button className="w-full mt-4">Login</Button>
//     </div>
//   );
// }
// src/pages/AdminLogin.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // demo login logic
    if (email && password) {
      onLogin(); // sets isAuthenticated = true
      navigate("/dashboard"); // redirect to dashboard
    } else {
      alert("Please enter email and password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md p-2 mt-1"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md p-2 mt-1"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}

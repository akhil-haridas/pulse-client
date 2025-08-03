import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@hooks";

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            await register(form);
            navigate("/");
        } catch (err: any) {
            setError(err.response?.data?.error || "Registration failed");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

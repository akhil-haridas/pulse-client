import { useAuth } from "@hooks";

const Dashboard = () => {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        window.location.href = "/login";
    };

    return (
        <div className="max-w-2xl mx-auto mt-16 p-6 border rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">
                    Welcome, {user?.name.split(" ")[0]} 👋
                </h1>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Logout
                </button>
            </div>

            <div className="mt-8">
                <p className="text-gray-600">Your daily logs and monthly reports will show here.</p>
            </div>
        </div>
    );
};

export default Dashboard;

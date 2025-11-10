import { userLogin } from "../../api";
import { CheckAuth } from "../../components/CheckAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await userLogin({ username, password });
            if (response.status === 200) {
                const data = response?.data;
                localStorage.setItem('auth_token', data.token);
                navigate('/dashboard')
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <CheckAuth>
            <div className="flex flex-col items-center justify-start my-10 py-3 gap-5">
                <h3 className="text-2xl font-bold">Login</h3>
                <form onSubmit={handleLogin} className="flex flex-col w-72">
                    <label htmlFor="email" className="mb-1 text-lg">Email:</label>
                    <input type="email" id="email" name="email" className="mb-3 border rounded-md border-blue-500 outline-none py-2 px-4 w-full" />
                    <label htmlFor="password" className="mb-1 text-lg">Password:</label>
                    <input type="password" id="password" name="password" className="mb-3 border rounded-md border-blue-500 outline-none py-2 px-4" />
                    <button type="submit" className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white p-2 mt-4">Login</button>
                </form>
            </div>
        </CheckAuth>
    );
};

export default Login;

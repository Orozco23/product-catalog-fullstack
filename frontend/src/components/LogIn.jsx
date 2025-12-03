import { useState } from 'react';
import logo from '../assets/cemaco.png';
import { auth } from '../fetch/User.fetch';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const changeEmail = (e) => setEmail(e.target.value)
    const changePassword = (e) => setPassword(e.target.value)

    const handleLogin = async () => {
        setError(null);
        
        if (!validateEmail()) {
            setError("Por favor ingresa un correo válido.");
            return;
        }

        if (!password) {
            setError("Por favor ingresa tu contraseña.");
            return;
        }

        setLoading(true);
        try {
            const response = await auth(email, password);
            // Save user data to localStorage
            localStorage.setItem('type', JSON.stringify(response.user.type));
            
            navigate('/catalog'); 
            
        } catch (error) {
            console.error("Error during login:", error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailPattern.test(email)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-blue-500 p-8 rounded-lg shadow-lg">
                <img src={logo} alt="Cemaco Logo" className="h-20 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
                
                {error && (
                    <div className="mb-4 p-3 bg-blue-600 text-white rounded">
                        {error}
                    </div>
                )}
                
                    <div>
                        <label className="block pt-6 pb-2 text-white font-medium mb-1">
                        Correo
                        </label>
                        <input
                        type="email"
                        placeholder="Ingresa tu correo"
                        id="email"
                        onChange={changeEmail}
                        value={email}
                        className="w-full px-4 py-4 border rounded-full focus:border-white focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block pt-6 pb-2 text-white font-medium mb-1">
                        Contraseña
                        </label>
                        <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        id="password"
                        onChange={changePassword}
                        value={password}
                        className="w-full px-4 py-4 border rounded-full focus:border-white focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-8 mt-6 bg-green-500 text-white font-semibold rounded-full hover:bg-green-dark-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        {loading ? 'Ingresando...' : 'Ingresar'}
                    </button>
                
            </div>
        </div>
    );
}

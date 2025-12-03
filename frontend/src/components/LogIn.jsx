import logo from '../assets/cemaco.png';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-blue-500 p-8 rounded-lg shadow-lg">
                <img src={logo} alt="Cemaco Logo" className="h-20 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block text-white font-medium mb-1">
                        Correo
                        </label>
                        <input
                        type="text"
                        placeholder="Ingresa tu correo"
                        className="w-full px-4 py-4 border rounded-full focus:border-white focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-1">
                        Contraseña
                        </label>
                        <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        className="w-full px-4 py-4 border rounded-full focus:border-white focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-dark-500 transition"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}

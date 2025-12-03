import { useEffect, useState } from "react";
import { ShoppingCartIcon, MagnifyingGlassIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import cemaco from '../assets/cemaco.png';
import jugueton from '../assets/jugueton.png';
import logo from '../assets/logo.png';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
        
    return (
        <header className="bg-white shadow-md">

            <div className={`w-screen mx-auto px-6 py-7 flex items-center justify-between bg-blue-500 text-white px-12 
            fixed top-0 left-0 z-50 transition-all duration-300
            ${isScrolled ? "" : "hidden"}`}>
                <div className="flex items-center space-x-2">
                <img
                    src={logo}
                    alt="Cemaco Logo"
                    className="h-10 w-auto"
                />
                </div>
                <div className="content-center px-7">
                    <a href="#" className="hover:underline flex items-center">
                        <span className="hidden md:inline text-xl">Departamentos</span>
                        <ChevronDownIcon aria-hidden="true" className="size-6" />
                    </a>
                </div>
                <div className="flex-1 mx-6">
                <div className="flex border border-gray-300 rounded-full overflow-hidden bg-white">
                    <input
                    type="text"
                    placeholder="Buscar"
                    className="flex-1 px-2 py-2 focus:outline-none border bg-white text-black border-gray-300"
                    />
                    <button className="bg-white text-black px-4 flex items-center justify-center">
                        <MagnifyingGlassIcon aria-hidden="true" className="size-5" />
                    </button>
                </div>
                </div>
                

                <div className="flex items-center space-x-6">
                <a href="#" className="flex items-center space-x-1 hover:text-blue-500">
                    <UserCircleIcon aria-hidden="true" className="size-8" />
                    <span className="hidden md:inline">Iniciar sesión</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:text-blue-500">
                    <ShoppingCartIcon aria-hidden="true" className="size-8" />
                </a>
                </div>
            </div>

            <div className="w-screen mx-auto">
                <div className="flex border-b border-blue-500">
                    <button className="px-4 py-2 -mb-px font-medium text-sm border-blue-500 bg-blue-500 rounded-t-lg">
                        <img
                            src={cemaco}
                            alt="Cemaco Logo"
                            className="h-6 w-auto"
                        />
                    </button>
                    <button className="px-4 py-2 -mb-px font-medium text-sm text-gray-600 hover:text-blue-500 rounded-t-lg">
                        <img
                            src={jugueton}
                            alt="Cemaco Logo"
                            className="h-8 w-auto"
                        />
                    </button>
                    <button className="px-4 py-2 -mb-px font-medium text-sm text-gray-600 hover:text-blue-500 rounded-t-lg hidden md:block">
                        Productos con suscripción
                    </button>
                    <button className="px-4 py-2 -mb-px font-medium text-sm text-gray-600 hover:text-blue-500 rounded-t-lg hidden md:block">
                        ¿Eres empresa?
                    </button>
                    <button className="px-4 py-2 -mb-px font-medium text-sm text-gray-600 hover:text-blue-500 rounded-t-lg hidden md:block">
                        Tiendas
                    </button>
                    <button className="px-4 py-2 -mb-px font-medium text-sm text-gray-600 hover:text-blue-500 rounded-t-lg hidden md:block">
                        Compra x chat
                    </button>
                    <button className="px-4 py-2 -mb-px font-medium text-sm text-gray-600 hover:text-blue-500 rounded-t-lg hidden md:block">
                        Compra x WhatsApp
                    </button>
                </div>
            </div>

            <div className={`w-screen mx-auto px-4 py-3 flex items-center justify-between bg-blue-500 text-white px-12
            ${isScrolled ? "hidden" : ""}`}>
                
                <div className="flex items-center space-x-2">
                <img
                    src={cemaco}
                    alt="Cemaco Logo"
                    className="h-10 w-auto"
                />
                </div>

                <div className="flex-1 mx-6">
                <div className="flex border border-gray-300 rounded-full overflow-hidden bg-white">
                    <input
                    type="text"
                    placeholder="Buscar"
                    className="flex-1 px-2 py-2 focus:outline-none border bg-white text-black border-gray-300"
                    />
                    <button className="bg-white text-black px-4 flex items-center justify-center">
                        <MagnifyingGlassIcon aria-hidden="true" className="size-5" />
                    </button>
                </div>
                </div>
                

                <div className="flex items-center space-x-6">
                <a href="#" className="flex items-center space-x-1 hover:text-blue-500">
                    <UserCircleIcon aria-hidden="true" className="size-8" />
                    <span className="hidden md:inline">Iniciar sesión</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:text-blue-500">
                    <ShoppingCartIcon aria-hidden="true" className="size-8" />
                </a>
                </div>
            </div>

            <nav className={`bg-blue-500 text-black w-sreen mx-auto px-4 py-3 flex justify-center grid grid-cols-1 md:grid-cols-2 space-x-6 text-xl text-white
            ${isScrolled ? "hidden" : ""}`}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-1 content-center">
                <a href="#" className="hover:underline flex items-center">
                    <span className="hidden md:inline">Departamentos</span>
                    <ChevronDownIcon aria-hidden="true" className="size-6" />
                </a>
                <a href="#" className="hover:underline">Bodas y Registros</a>
                <a href="#" className="hover:underline">Revistas</a>
                <a href="#" className="hover:underline">Privilegio</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <a href="#" className="hover:underline">Entrega rapida</a>
                <a href="#" className="hover:underline">Retira en tiendas</a>
                </div>
            </nav>

            <nav className={`bg-gray-100 text-gray-800 w-screen mx-auto px-4 py-3 flex justify-center grid grid-cols-1 md:grid-cols-6 md:gap-18 space-x-6 text-base
            ${isScrolled ? "hidden" : ""}`}>
                <a href="#" className="hover:underline">Ferretería</a>
                <a href="#" className="hover:underline">Hogar</a>
                <a href="#" className="hover:underline">Blancos</a>
                <a href="#" className="hover:underline">Mascotas</a>
                <a href="#" className="hover:underline">Tecnología</a>
                <a href="#" className="hover:underline">Muebles</a>
            </nav>
        </header>
    );
}

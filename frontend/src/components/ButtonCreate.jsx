import { useNavigate } from 'react-router-dom';
export default function ButtonCreate() {
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/create-product');
    }
    return (
        <div className="fixed bottom-8 right-8 flex flex-col items-center group">
            <span
                className="
                mb-2 px-3 py-1 
                text-sm text-white 
                bg-gray-800 
                rounded-md 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-200
                "
            >
                Agregar producto
            </span>
            <button
            disabled={localStorage.getItem('type') === '3'}
            className="
                fixed 
                bottom-8 right-8
                bg-blue-600 
                text-white 
                w-20 h-20 
                rounded-full 
                shadow-lg 
                flex items-center 
                justify-center 
                text-4xl 
                hover:bg-blue-700 
                transition-all
                font-bold
            "
            onClick={handleAdd}
            >
            +
            </button>
        </div>
    );
}

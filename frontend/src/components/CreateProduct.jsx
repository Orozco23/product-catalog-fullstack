import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../fetch/Product.fetch";
import { useEffect } from "react";

export default function CreateProduct() {
    const navigate = useNavigate();
    const Cancelar = () => {
        navigate('/catalog');
    }
    
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [inventory, setInventory] = useState('');
    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState(null);

    const changeSku = (e) => setSku(e.target.value);
    const changeName = (e) => setName(e.target.value);
    const changeDescription = (e) => setDescription(e.target.value);
    const changePrice = (e) => setPrice(e.target.value);
    const changeInventory = (e) => setInventory(e.target.value);
    const handleImageChange = (e) => {
    const file = e.target.files[0];
        if (!file) return;
        setImage(file );
        // preview
        const url = URL.createObjectURL(file);
        setPreview(url);
    };

    const saveProduct = async () => {
        try{
            const response = await createProduct(sku, name, description, price, inventory, image);
            navigate('/catalog');
        }catch(error){
            console.error("Error deleting product:", error);
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('type')) {
          navigate('/');
        } else if (localStorage.getItem('type') === '3') {
          navigate('/catalog');
        }
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6 rounded shadow-2xl  text-black">
        <h1 className="text-2xl font-bold mb-4">Crear Producto</h1>

        <div className="space-y-4">
            
            <div>
            <label className="block font-medium">SKU</label>
            <input
                type="text"
                value={sku}
                onChange={changeSku}
                className="w-full px-3 py-2 border bg-gray-100 rounded"
            />
            </div>

            <div>
            <label className="block font-medium">Nombre</label>
            <input
                name="name"
                value={name}
                onChange={changeName}
                className="w-full px-3 py-2 border rounded"
            />
            </div>

            <div>
            <label className="block font-medium">Descripción</label>
            <textarea
                name="description"
                value={description}
                onChange={changeDescription}
                rows={3}
                className="w-full px-3 py-2 border rounded"
            />
            </div>

            <div>
            <label className="block font-medium">Precio</label>
            <input
                name="price"
                value={price}
                onChange={changePrice}
                type="number"
                step="0.01"
                className="w-full px-3 py-2 border rounded"
            />
            </div>

            <div>
            <label className="block font-medium">Inventario</label>
            <input
                name="inventory"
                value={inventory}
                onChange={changeInventory}
                type="number"
                className="w-full px-3 py-2 border rounded"
            />
            </div>

            <div>
            <label className="block font-medium mb-1">Imagen</label>

            <div className="flex justify-center">
                <img
                src={preview}
                alt="preview"
                className="w-32 h-32 object-cover rounded border mb-2"
                />
            </div>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            </div>

            <div className="flex justify-between mt-6">
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                onClick={Cancelar}
            >
                Cancelar
            </button>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                onClick={saveProduct}
            >
                Guardar
            </button>
            </div>
        </div>
        </div>
    );
}
export default function UpdateProduct() {

    const preview = "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg";
    return (
        <div className="max-w-6xl mx-auto p-6 rounded shadow-2xl  text-black">
        <h1 className="text-2xl font-bold mb-4">Editar Producto</h1>

        <form className="space-y-4">
            
            <div>
            <label className="block font-medium">SKU</label>
            <input
                type="text"
                value="sku"
                readOnly
                className="w-full px-3 py-2 border bg-gray-100 rounded"
            />
            </div>

            <div>
            <label className="block font-medium">Nombre</label>
            <input
                name="name"
                value="name"
                className="w-full px-3 py-2 border rounded"
            />
            </div>

            <div>
            <label className="block font-medium">Descripción</label>
            <textarea
                name="description"
                rows={3}
                className="w-full px-3 py-2 border rounded"
            />
            </div>

            <div>
            <label className="block font-medium">Precio</label>
            <input
                name="price"
                type="number"
                step="0.01"
                className="w-full px-3 py-2 border rounded"
            />
            </div>

            <div>
            <label className="block font-medium">Inventario</label>
            <input
                name="inventory"
                type="number"
                className="w-full px-3 py-2 border rounded"
            />
            </div>

            <div>
            <label className="block font-medium mb-1">Imagen</label>

            {preview && (
                <div className="flex justify-center">
                    <img
                    src={preview}
                    alt="preview"
                    className="w-32 h-32 object-cover rounded border mb-2"
                    />
                </div>
            )}

            <input
                type="file"
                accept="image/*"
            />
            </div>

            <div className="flex justify-between mt-6">
            <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
                Eliminar
            </button>

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
                Guardar
            </button>
            </div>
        </form>
        </div>
    );
}
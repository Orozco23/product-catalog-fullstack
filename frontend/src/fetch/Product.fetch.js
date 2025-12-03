const base = 'http://localhost:3000';

export const getProductsForClient = async ({ page = 1, limit = 10, sort = 'created_at' } = {}) => {
    const url = `${base}/products/clients?page=${page}&limit=${limit}&sort=${encodeURIComponent(sort)}`;
    const res = await fetch(url, {
        headers: {
            'Cache-Control': 'no-cache'
        }
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.error || err.message || `HTTP ${res.status}`);
    }
    return res.json(); // { page, limit, totalPages, totalItems, data }
}

export const getProducts = async ({ page = 1, limit = 10, sort = 'created_at' } = {}) => {
    const url = `${base}/products?page=${page}&limit=${limit}&sort=${encodeURIComponent(sort)}`;
    const res = await fetch(url, {
        headers: {
            'Cache-Control': 'no-cache'
        }
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.error || err.message || `HTTP ${res.status}`);
    }
    return res.json(); // { page, limit, totalPages, totalItems, data }
}

export const softDeleted = async (sku) => {
    const url = `${base}/products/${encodeURIComponent(sku)}`;
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.error || err.message || `HTTP ${res.status}`);
    }
    
    return res.json();
}

export const updateProduct = async (sku, name, description, price, inventory, image) => {

    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    data.append("inventory", inventory);

    if (image) {
      data.append("image", image);
    }

    const url = `${base}/products/${encodeURIComponent(sku)}`;
    const res = await fetch(url, {
      method: "PUT",
      body: data,
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.error || err.message || `HTTP ${res.status}`);
    }
    
    return res.json();
};

export const createProduct = async (sku, name, description, price, inventory, image) => {

    const data = new FormData();
    data.append("sku", sku);
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    data.append("inventory", inventory);

    if (image) {
      data.append("image", image);
    }

    const url = `${base}/products`;
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.error || err.message || `HTTP ${res.status}`);
    }
    
    return res.json();
};
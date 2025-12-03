const base = 'http://localhost:3000';

export const auth = async (email, password) => {
    const url = `${base}/auth/login`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.error || err.message || `HTTP ${res.status}`);
    }
    
    return res.json();
}
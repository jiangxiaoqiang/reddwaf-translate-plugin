

// Standard variation
export function api<T>(url: string): Promise<T> {
    debugger
    return fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
        })
}



import axios from "axios";

export function api<T>(url: string): Promise<T> {
    return fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
        })
}

export function api_post<T>(url: string,data: any): Promise<T> {
    return fetch(url,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': 'xxxxx'
        },
        body: JSON.stringify(data),
    })
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
        })
}

export function do_post(url:string,data:any){
    axios.post(url, JSON.stringify(data))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


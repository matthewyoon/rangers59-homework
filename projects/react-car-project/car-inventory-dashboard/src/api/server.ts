let token = '0aa41fb314890233cd365ac621eff744ef034d3da99c61c1'

export const server_calls = {
    get: async () => {
        const response = await fetch (`https://car-inventory-rangers59-my.herokuapp.com/api/vehicles`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if(!response.ok){
            console.log('Failed to fetch data from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://car-inventory-rangers59-my.herokuapp.com/api/vehicles`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            console.log('Failed to create new drone data')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://car-inventory-rangers59-my.herokuapp.com/api/vehicles/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data) 
        });
        if(!response.ok){
            console.log('Failed to update new drone data')
        }
    },
    delete: async (id:string) => {
        const response = await fetch(`https://car-inventory-rangers59-my.herokuapp.com/api/vehicles/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}
const PORT = 3501;

export const getUsers = () => {
    return fetch(`http://localhost:${PORT}/users`)
        .then(res => res.json())
        .then(data => 
            data.map((val) => {
                const {...data} = val;
                return {...data};
            })
    );
}

export const getOrders = () => {
    return fetch(`http://localhost:${PORT}/orders`)
        .then(res => res.json())
        .then(data => 
            data.map((val) => {
                const {...data} = val;
                return {...data};
            })
    );
}
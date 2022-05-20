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

export const getPayments = () => {
    return fetch(`http://localhost:${PORT}/payments`)
        .then(res => res.json())
        .then(data => 
            data.map((val) => {
                const {...data} = val;
                return {...data};
            })
    );
}

export const getValidations = () => {
    return fetch(`http://localhost:${PORT}/validations`)
        .then(res => res.json())
        .then(data => 
            data.map((val) => {
                const {...data} = val;
                return {...data};
            })
    );
}

export const getProfiles = () => {
    return fetch(`http://localhost:${PORT}/admin/profiles`)
        .then(res => res.json())
        .then(data => 
            data.map((val) => {
                const {...data} = val;
                return {...data};
            })
    );
}

export const getFeedbacks = () => {
    return fetch(`http://localhost:${PORT}/feedbacks`)
        .then(res => res.json())
        .then(data => 
            data.map((val) => {
                const {...data} = val;
                return {...data};
            })
    );
}
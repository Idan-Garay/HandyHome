const PORT = 3501;

export const getJobs = () => {
    return fetch(`http://localhost:${PORT}/jobs`)
        .then(res => res.json())
        .then(data => 
            data.map((val) => {
                const {...data} = val;
                return {...data};
            })
    );
}
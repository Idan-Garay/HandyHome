const PORT = 4000;

export const getProfiles = () => {
  return fetch(`http://localhost:${PORT}/profiles`)
    .then((res) => res.json())
    .then((data) =>
      data.map((val) => {
        const { address, ...data } = val;
        return { ...data, area: address.area };
      })
    );
};

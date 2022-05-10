const serverPORT = 3501;

export const getProfiles = () => {
  return fetch(`http://localhost:${serverPORT}/profiles`)
    .then((res) => res.json())
    .then((data) => {
      return data.map((val) => {
        const { Address, ...data } = val;
        return { ...data, area: Address.area };
      });
    });
};

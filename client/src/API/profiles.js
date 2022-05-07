const serverPORT = 3501;

export const getProfiles = () => {
  return fetch(`http://localhost:${serverPORT}/profiles`)
    .then((res) => res.json())
    .then((data) => {
      console.log("here", data);
      return data.map((val) => {
        const { address, ...data } = val;
        return { ...data, area: address.area };
      });
    });
};

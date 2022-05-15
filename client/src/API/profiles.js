const serverPORT = 3501;

export const getProfiles = () => {
  return fetch(`http://localhost:${serverPORT}/profiles`)
    .then((res) => res.json())
    .then((data) => {
      return data.map((val) => {
        const { Address, ...data } = val;
        const area = Address ? Address.area : "";
        return { ...data, area: area };
      });
    });
};

export const getProfile = (id) => {
  return fetch(`http://localhost:${serverPORT}/profiles/${id}`).then((res) =>
    res.json()
  );
};

export const patchProfile = (updateData) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  };
  return fetch(
    `http://localhost:${serverPORT}/profiles/${updateData.id}/edit`,
    requestOptions
  ).then((res) => res.json());
};

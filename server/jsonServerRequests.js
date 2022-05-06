import fetch from "node-fetch";

export const getUsers = async () => {
  const users = await fetch("http://localhost:4000/users").then((res) =>
    res.json()
  );
  return users;
};

export const verifyUser = async (email) => {
  const requestOptions = {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      verified: true,
    }),
  };

  const users = await getUsers();
  let userId = -1;
  if (users) {
    userId = users.find((user) => user.email === email)?.id;
    console.log("here", userId, users);
  }

  const res = await fetch(
    `http://localhost:4000/users/${userId}`,
    requestOptions
  );
  console.log(await res.json());

  return res;
};

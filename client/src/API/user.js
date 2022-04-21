const PORT = 4000;

export const registerUser = (registerForm) => {
  const { username, password, email } = registerForm;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      accountType: 0,
      username,
      password,
      email,
      profileId: 1,
      verified: 0,
    }),
  };

  try {
    fetch(`http://localhost:${PORT}/users`, requestOptions)
      .then((res) => res.json())
      .then((request) => request.id);
  } catch (err) {
    console.log(err);
  }
};

const PORT = 4000;
const serverPORT = 3501;

// an API for client to server interaction

export const login = async (loginForm) => {
  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginForm),
  };

  try {
    const response = await fetch(
      `http://localhost:${serverPORT}/login`,
      requestOptions
    );
    return response.json();
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const sendConfirmationEmail = (registrantEmail) => {
  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: registrantEmail,
    }),
  };
  try {
    const response = fetch(
      `http://localhost:${serverPORT}/api/email/send_confirmation`,
      requestOptions
    );
    return response;
  } catch (err) {
    return {err};
  }
};

export const registerUser = async (registerForm) => {
  const { username, password, email } = registerForm;
  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
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
    const response = fetch(
      `http://localhost:${serverPORT}/register`,
      requestOptions
    );
    return response;
  } catch (err) {
    console.log(err);
    return {};
  }
};

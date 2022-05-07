const PORT = 4000;
const serverPORT = 3501;

// an API for client to server interaction

export const serverValidateLoginForm = async (loginForm) => {
  try {
    let users = await fetch(`http://localhost:${serverPORT}/users`);
    users = await users.json();
    const validationFeedback = validateLoginForm(users, loginForm);
    return validationFeedback;
  } catch (err) {
    console.log(err);
  }
};

export const serverVerifiedUser = async (email) => {
  try {
    let users = await fetch(`http://localhost:${serverPORT}/users`);
    users = await users.json();
    return isUserVerified(users, email);
  } catch (err) {
    console.log(err);
  }
};

const isUserVerified = (users = [], email) => {
  if (users.length) {
    const user = users.find((user) => user.email === email);
    // if users.find() returns -1 then no user was found otherwise, ln 23
    if (user && user.verified === true) return user;
  }
  return false;
};

const validateLoginForm = (users, form) => {
  // differs from validateRegisterForm
  // returns a bool instead of object {errors:....}
  let isValid = false;

  const user = users.find((user) => user.email === form.email);
  // if users.find() returns -1 then no user was found otherwise, ln 23
  if (user && user.password === form.password) isValid = true;

  return isValid;
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
    fetch(
      `http://localhost:${serverPORT}/api/email/send_confirmation`,
      requestOptions
    )
      .then((res) => res.json())
      .catch(console.log);
  } catch (err) {
    console.log(err);
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

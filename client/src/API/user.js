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

const validateRegisterForm = (users, form) => {
  let flag = false; // true if both username and email already exists
  const errors = {};

  let length = users.length;
  for (let x = 0; x < length && !flag; x++) {
    if (users[x].email === form.email) errors.email = "Email already used.";
    if (users[x].username === form.username)
      errors.username = "Username already used.";
    if (Object.keys(errors).length === 2) flag = true;
  }
  return errors;
};

export const serverValidateRegisterForm = async (registerForm) => {
  try {
    const users = await fetch(`http://localhost:${serverPORT}/users`);
    const validationFeedback = validateRegisterForm(users, registerForm);
    return validationFeedback;
  } catch (err) {
    console.log(err);
  }
};

export const sendConfirmationEmail = (registrantEmail) => {
  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Sec-Fetch-Site": "cross-site",
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

export const registerUser = (registerForm) => {
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
    fetch(`http://localhost:${serverPORT}/users`, requestOptions).then((res) =>
      res.json()
    );
  } catch (err) {
    console.log(err);
  }
};

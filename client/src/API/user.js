const PORT = 4000;

// an API for client to server interaction

export const serverValidateLoginForm = (loginForm) => {
  try {
    const validationFeedback = fetch(`http://localhost:${PORT}/users`)
      .then((res) => res.json())
      .then((users) => validateLoginForm(users, loginForm));
    return validationFeedback;
  } catch (err) {
    console.log(err);
  }
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

export const serverValidateRegisterForm = (registerForm) => {
  try {
    const validationFeedback = fetch(`http://localhost:${PORT}/users`)
      .then((res) => res.json())
      .then((users) => validateRegisterForm(users, registerForm));
    return validationFeedback;
  } catch (err) {
    console.log(err);
  }
};

export const sendConfirmationEmail = (registerForm) => {
  const { username, password, email } = registerForm;

  const requestOptions = {
    method: "POST",
    credentials: "include",
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
    fetch(`http://localhost:${PORT}/api/registration`, requestOptions)
      .then((res) => res.json())
      .then(console.log);
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = (registerForm) => {
  const { username, password, email } = registerForm;
  const requestOptions = {
    method: "POST",
    credentials: "include",
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

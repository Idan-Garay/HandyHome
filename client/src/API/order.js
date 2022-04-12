const PORT = 4000;

export const postRequestByEmployer = (requestForm) => {
  const { contactNo, minRate, description } = requestForm;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contactNo, minRate, description }),
  };

  try {
    fetch(`http://localhost:${PORT}/api/requestForm`, requestOptions)
      .then((res) => res.json())
      .then((request) => request.id);
  } catch (err) {
    console.log(err);
  }
};

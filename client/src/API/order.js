const serverPORT = 3501;

export const getOrdersByEmployer = (employerUserId) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fromUserId: employerUserId,
      }),
    };
    return fetch(`http://localhost:${serverPORT}/orders`, requestOptions).then(
      (res) => res.json()
    );
  } catch (err) {
    console.log(err);
  }
};

export const postRequestByEmployer = (requestForm) => {
  const { contactNo, minRate, description, to, from } = requestForm;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      contactNo,
      price: minRate,
      description,
      status: "pending",
    }),
  };

  try {
    fetch(`http://localhost:${serverPORT}/request`, requestOptions)
      .then((res) => res.json())
      .then((request) => request.id);
  } catch (err) {
    console.log(err);
  }
};

export const acceptRequest = (requestId, isAccepted) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: isAccepted ? "accepted" : "rejected",
    }),
  };

  try {
    fetch(
      `http://localhost:${serverPORT}/requests/${requestId}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((request) => request.id);
  } catch (err) {
    console.log(err);
  }
};

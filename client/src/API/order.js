const serverPORT = 3501;

export const validatePayment = (validateInfo) => {
  try {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validateInfo),
    };
    return fetch(
      `http://localhost:${serverPORT}/order/validate`,
      requestOptions
    ).then((res) => res.json());
  } catch (err) {
    console.log(err);
  }
};

export const getOrdersByEmployer = (employerUserId) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employerUserId,
      }),
    };
    return fetch(
      `http://localhost:${serverPORT}/orders/employer`,
      requestOptions
    ).then((res) => res.json());
  } catch (err) {
    console.log(err);
  }
};

export const getOrdersForHandyman = (handymanUserId) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        handymanUserId,
      }),
    };
    return fetch(
      `http://localhost:${serverPORT}/orders/handyman`,
      requestOptions
    ).then((res) => res.json());
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

export const confirmOrder = (order) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      order,
    }),
  };

  try {
    fetch(`http://localhost:${serverPORT}/request/confirm}`, requestOptions)
      .then((res) => res.json())
      .then((request) => request.id);
  } catch (err) {
    console.log(err);
  }
};

export const acceptRequest = (order, isAccepted) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      order: { ...order, status: isAccepted },
    }),
  };

  try {
    fetch(`http://localhost:${serverPORT}/request/accept`, requestOptions)
      .then((res) => res.json())
      .then((request) => request.id);
  } catch (err) {
    console.log(err);
  }
};

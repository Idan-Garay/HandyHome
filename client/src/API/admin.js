const PORT = 3501;

// User api calls

export const getUsers = () => {
  return fetch(`http://localhost:${PORT}/users`)
    .then((res) => res.json())
    .then((data) =>
      data.map((val) => {
        const { ...data } = val;
        return { ...data };
      })
    );
};

export const patchUser = (updateData) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  };
  return fetch(
    `http://localhost:${PORT}/users/edit/${updateData.id}`,
    requestOptions
  ).then((res) => res.json());
};

export const deleteUser = (userId) => {
  try {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userId }),
    };
    return fetch(
      `http://localhost:${PORT}/users/delete/${userId}`,
      requestOptions
    ).then((res) => res.json());
  } catch (e) {
    console.log(e);
  }
};

// Order api calls

export const getOrders = () => {
  return fetch(`http://localhost:${PORT}/orders`)
    .then((res) => res.json())
    .then((data) =>
      data.map((val) => {
        const { ...data } = val;
        return { ...data };
      })
    );
};

export const patchOrder = (updateData) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  };
  return fetch(
    `http://localhost:${PORT}/orders/edit/${updateData.id}`,
    requestOptions
  ).then((res) => res.json());
};

export const deleteOrder = (orderId) => {
  try {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: orderId }),
    };
    return fetch(
      `http://localhost:${PORT}/orders/delete/${orderId}`,
      requestOptions
    ).then((res) => res.json());
  } catch (e) {
    console.log(e);
  }
};

// Payment Validation api calls

export const getPayments = () => {
  return fetch(`http://localhost:${PORT}/payments`)
    .then((res) => res.json())
    .then((data) =>
      data.map((val) => {
        const { ...data } = val;
        return { ...data };
      })
    );
};

export const patchPayment = (updateData) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  };
  return fetch(
    `http://localhost:${PORT}/requests/payment/edit/${updateData.id}`,
    requestOptions
  ).then((res) => res.json());
};

export const deletePayment = (paymentId) => {
  try {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: paymentId }),
    };
    return fetch(
      `http://localhost:${PORT}/requests/payment/delete/${paymentId}`,
      requestOptions
    ).then((res) => res.json());
  } catch (e) {
    console.log(e);
  }
};

// Profile Validation api calls

export const getValidations = () => {
  return fetch(`http://localhost:${PORT}/validations`)
    .then((res) => res.json())
    .then((data) =>
      data.map((val) => {
        const { ...data } = val;
        return { ...data };
      })
    );
};

// Profile api calls

export const getProfiles = () => {
  return fetch(`http://localhost:${PORT}/admin/profiles`)
    .then((res) => res.json())
    .then((data) =>
      data.map((val) => {
        const { ...data } = val;
        return { ...data };
      })
    );
};

export const patchProfile = (updateData) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  };
  return fetch(
    `http://localhost:${PORT}/admin/profiles/edit/${updateData.id}`,
    requestOptions
  ).then((res) => res.json());
};

export const deleteProfile = (profileId) => {
  try {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: profileId }),
    };
    return fetch(
      `http://localhost:${PORT}/admin/profiles/delete/${profileId}`,
      requestOptions
    ).then((res) => res.json());
  } catch (e) {
    console.log(e);
  }
};

// Feedback api calls

export const getFeedbacks = () => {
  return fetch(`http://localhost:${PORT}/feedbacks`)
    .then((res) => res.json())
    .then((data) =>
      data.map((val) => {
        const { ...data } = val;
        return { ...data };
      })
    );
};

export const getFeedbacksToUserId = (userId) => {
  return fetch(`http://localhost:${PORT}/feedbacks/${userId}`)
    .then((res) => res.json())
    .then((data) =>
      data.map((val) => {
        const { ...data } = val;
        return { ...data };
      })
    );
};

export const patchFeedback = (updateData) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  };
  return fetch(
    `http://localhost:${PORT}/feedbacks/edit/${updateData.id}`,
    requestOptions
  ).then((res) => res.json());
};

export const deleteFeedback = (feedbackId) => {
  try {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: feedbackId }),
    };
    return fetch(
      `http://localhost:${PORT}/feedbacks/delete/${feedbackId}`,
      requestOptions
    ).then((res) => res.json());
  } catch (e) {
    console.log(e);
  }
};

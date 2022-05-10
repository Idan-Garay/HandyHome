const serverPORT = 3501;

export const postRequestByEmployer = (requestForm) => {
  const { formType, contactNo, minRate, description, profileId } = requestForm;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from: profileId,
      formType,
      contactNo,
      minRate,
      description,
      status: "pending",
    }),
  };

  try {
    fetch(`http://localhost:${serverPORT}/requests`, requestOptions)
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
    fetch(`http://localhost:${PORT}/requests/${requestId}`, requestOptions)
      .then((res) => res.json())
      .then((request) => request.id);
  } catch (err) {
    console.log(err);
  }
};

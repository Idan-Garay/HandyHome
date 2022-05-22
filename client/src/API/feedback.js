const PORT = 3501;

export const postFeedback = (feedback) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ feedbackForm: feedback }),
  };

  try {
    fetch(`http://localhost:${PORT}/order/feedback`, requestOptions)
      .then((res) => res.json())
      .then((feedback) => feedback.id);
  } catch (err) {
    console.log(err);
  }
};

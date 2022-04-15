const PORT = 4000;

export const postFeedback = (feedback) => {
  const { type, ratings, description } = feedback;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, ratings, description }),
  };

  try {
    fetch(`http://localhost:${PORT}/feedbacks`, requestOptions)
      .then((res) => res.json())
      .then((feedback) => feedback.id);
  } catch (err) {
    console.log(err);
  }
};

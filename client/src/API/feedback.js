const PORT = 4000;

export const postFeedback = (feedback) => {
  const { ratings, review } = feedback;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ratings, review }),
  };

  try {
    fetch(`http://localhost:${PORT}/api/feedback`, requestOptions)
      .then((res) => res.json())
      .then((feedback) => feedback.id);
  } catch (err) {
    console.log(err);
  }
};

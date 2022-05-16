const PORT = 3501;

export const getTeamMembers = async (primaryProfileId) => {
  try {
    let res = await fetch(
      `http://localhost:${PORT}/profiles/${primaryProfileId}/teamMembers`
    );
    res = res.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

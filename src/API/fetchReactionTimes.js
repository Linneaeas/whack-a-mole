const fetchReactionTimes = async () => {
  try {
    const response = await fetch(
      "http://localhost:3001/leaderboard/fastest-hit-rates"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    setReactionTimes(data);
  } catch (error) {
    console.error("Error fetching reaction times:", error);
  }
};

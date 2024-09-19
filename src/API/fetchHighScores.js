export const fetchHighScores = async () => {
  try {
    const response = await fetch(
      "http://localhost:3001/leaderboard/highest-scores"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching high scores:", error);
    throw error;
  }
};

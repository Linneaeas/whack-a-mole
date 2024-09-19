export const submitPlayerData = async (playerName, score, hitRate) => {
  try {
    const response = await fetch("http://localhost:3001/submit-player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playerName, score, hitRate }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting player data:", error);
    throw error;
  }
};

// src/components/HighScoreModal.js
import React, { useEffect, useState } from 'react';
import './HighScoreModal.css';

function HighScoreModal({ show, onClose, onStartNewGame }) {
    const [highScores, setHighScores] = useState([]);
    const [reactionTimes, setReactionTimes] = useState([]);

    // fejk data topplista/reaktiontid 
    useEffect(() => {
        if (show) {
            fetchHighScores();
            fetchReactionTimes();

            // stäng modalen efter 10 sekunder (eller om man klickar X)
            const timer = setTimeout(() => {
                onClose();
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    const fetchHighScores = () => {
        // Byt ut mot data från databasen sen 
        const scores = [
            { name: 'Player 1', score: 3000 },
            { name: 'Player 2', score: 2900 },
            { name: 'Player 3', score: 2800 },
        ];
        setHighScores(scores);
    };

    const fetchReactionTimes = () => {
        // Byt ut mot data från databasen sen
        const times = [
            { name: 'Player 1', time: '0.85s' },
            { name: 'Player 2', time: '0.90s' },
            { name: 'Player 3', time: '0.95s' },
        ];
        setReactionTimes(times);
    };

    return show ? (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Game Over</h2>

                <div className="high-score-section">
                    <h3>Top 10 High Scores</h3>
                    <ul>
                        {highScores.map((player, index) => (
                            <li key={index}>
                                {index + 1}. {player.name}: {player.score} points
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="reaction-time-section">
                    <h3>Top 10 Fastest Reaction Times</h3>
                    <ul>
                        {reactionTimes.map((player, index) => (
                            <li key={index}>
                                {index + 1}. {player.name}: {player.time}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="modal-actions">
                    <button onClick={onStartNewGame}>Start New Game</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    ) : null;
}

export default HighScoreModal;

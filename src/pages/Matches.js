import React, { useState } from 'react';

const Matches = () => {
  // Sample matches data
  const [matches] = useState([
    { id: 1, player1: 'John Doe', player2: 'Alice Smith', date: '2025-04-10' },
    { id: 2, player1: 'Michael Lee', player2: 'Chris Johnson', date: '2025-04-12' },
  ]);

  return (
    <div className="container">
      <h1>Upcoming Matches</h1>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            {match.player1} vs {match.player2} - {match.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;

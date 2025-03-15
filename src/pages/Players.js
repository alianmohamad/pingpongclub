import React, { useState } from 'react';

const Players = () => {
  // Sample players data
  const [players] = useState([
    { id: 1, name: 'John Doe', ranking: 1 },
    { id: 2, name: 'Alice Smith', ranking: 2 },
    { id: 3, name: 'Michael Lee', ranking: 3 },
  ]);

  return (
    <div className="container">
      <h1>Players</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - Ranking: {player.ranking}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Players;

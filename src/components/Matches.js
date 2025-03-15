import React from "react";
import "../styles/matches.css";

const Matches = () => {
  return (
    <section id="matches" className="container bento-section">
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}>
        <i className="fas fa-calendar-alt"></i> Upcoming Matches
      </h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>March 10, 2025</td>
            <td>Alice</td>
            <td>Bob</td>
            <td>Sydney, NSW</td>
          </tr>
          <tr>
            <td>March 15, 2025</td>
            <td>Charlie</td>
            <td>David</td>
            <td>Melbourne, VIC</td>
          </tr>
          <tr>
            <td>March 20, 2025</td>
            <td>Emma</td>
            <td>Frank</td>
            <td>Brisbane, QLD</td>
          </tr>
          <tr>
            <td>March 25, 2025</td>
            <td>Grace</td>
            <td>Harry</td>
            <td>Perth, WA</td>
          </tr>
          <tr>
            <td>March 30, 2025</td>
            <td>Ivy</td>
            <td>Jack</td>
            <td>Canberra, ACT</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Matches;
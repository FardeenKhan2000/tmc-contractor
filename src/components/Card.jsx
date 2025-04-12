import React from "react";

function Card() {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <h2>Card Component</h2>
      <img
        src="https://imgs.search.brave.com/NrlZu-RbjGqH--zt6qRLLqua63hgRZuuRQziGS5ua1U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2luZGV4L2FpLWlt/YWdlLWdlbmVyYXRv/ci1vbmUud2VicA"
        alt="Card Image"
      />
      <h3>Card Title</h3>
      <p>
        This is a description of the card. It contains some information about
        the content of the card.
      </p>
    </div>
  );
}

export default Card;

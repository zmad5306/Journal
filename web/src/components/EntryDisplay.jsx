import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function EntryForm({ initialEntry = { title: "", body: "" } }) {
  const [entry, setEntry] = useState(initialEntry);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="entry-detail">
      <h2 className="entry-title">{entry.title}</h2>
      <p className="entry-content">{entry.body}</p>
      <Link to="/" className="back-link">
        ← Back to Journal
      </Link>
    </div>
  );
}

export default EntryForm;

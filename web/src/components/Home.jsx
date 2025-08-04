import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ApiRoutes } from "../config";

function Home() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(ApiRoutes.entries)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((fetchedEntries) => {
        setEntries(fetchedEntries);
      })
      .catch((error) => {
        console.error("Error fetching entries", error);
        alert("Unable to load entries");
      });
  }, []);

  return (
    <section class="entries">
      {entries.map((entry) => (
        <article class="entry" key={entry._id}>
          <Link to={`/read/${entry._id}`} className="h5 text-decoration-none">
            <h3>{entry.title}</h3>
          </Link>
          <p>{entry.body.substring(0, 100)}...</p>
          <span class="date">{entry.createdDate}</span>
        </article>
      ))}
    </section>
  );
}

export default Home;

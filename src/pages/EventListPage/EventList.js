import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../../context/Context";
const EventList = () => {
  const { events, get_event_datails, isOnline } = useContext(EventContext);

  return (
    <div>
      {isOnline ? (
        <>
          <p style={{ marginBottom: "1rem" }}>You are online</p>
          <button style={{ marginBottom: "4rem" }} onClick={get_event_datails}>
            Load data
          </button>
        </>
      ) : (
        <p>You are offline</p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {events?.map((event) => (
          <Link
            style={{
              textDecoration: "none",
              border: "1px solid gray",
              width: "fit-content",
              padding: "0.5rem 1rem",
            }}
            to={`/${event.ID}`}
          >
            <span>{event.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventList;

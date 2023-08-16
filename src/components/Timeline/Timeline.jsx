import React from "react";
import { Box, Typography } from "@mui/material";
import "./Timeline.css";

const Timeline = ({ events }) => {
  return (
    <Box className="timeline">
      {events.map((event, index) => (
        <Box key={index} className="timeline-event">
          <Typography
            variant="h5"
            color="white"
            className="timeline-header"
            sx={{ my: 3 }}
          >
            {event.title}
          </Typography>
          <div
            className="timeline-circle"
            style={{
              backgroundImage: `url(${event.photo})`,
              my: "25px",
            }}
          ></div>
            <Typography
              variant="subtitle2"
              color="white"
              className="timeline-date"
              sx={{ my: 2 }}
            >
              {event.date}
            </Typography>
          <Typography variant="body1" color="white" className="timeline-text">
            {event.description}
          </Typography>
          <div
            className={`timeline-line ${
              index === events.length - 1 ? "hide-line" : ""
            }`}
          ></div>
        </Box>
      ))}
    </Box>
  );
};

export default Timeline;

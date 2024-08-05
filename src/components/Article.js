import React from 'react';

function getReadingTimeEmoji(minutes) {
  if (minutes < 30) {
    const coffeeCups = Math.ceil(minutes / 5);
    return "☕️".repeat(coffeeCups) + ` ${minutes} min read`;
  } else {
    const bentoBoxes = Math.ceil(minutes / 10);
    return "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
  }
}

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutesToRead && <p>{getReadingTimeEmoji(minutesToRead)}</p>}
    </article>
  );
}

export default Article;

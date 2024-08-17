import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const times = Math.ceil(minutes / (minutes < 30 ? 5 : 10));
  const readTime = emoji.repeat(times);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {readTime} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

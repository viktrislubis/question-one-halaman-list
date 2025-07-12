import React from "react";
import "./PostCard.css";

function PostCard({ idea }) {
  const fallbackImage = "https://picsum.photos/id/1015/600/400";

  const image =
    idea?.small_image?.url || idea?.medium_image?.url || fallbackImage;

  const date = idea?.published_at
    ? new Date(idea.published_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "13 Juli 2025";
  const title = idea?.title || "Judul Artikel Contoh";

  return (
    <div className="post-card">
      <img
        src={image}
        alt={title}
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImage;
        }}
      />
      <p className="post-date">{date}</p>
      <h3 className="post-title">{title}</h3>
    </div>
  );
}

export default PostCard;

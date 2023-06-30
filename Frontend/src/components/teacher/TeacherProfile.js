import React from "react";

function TeacherProfile({ image, name }) {
  return (
    <div className="w-1/2 h-56 mt-8 border-2 border-red-200">
      <article className="w-full h-4/5">
        <img
          className="w-full h-full"
          src={image}
          alt="teacher"
          style={{ imageRendering: "optimizeQuality" }}
        />
      </article>
      <h2>{name}</h2>
    </div>
  );
}

export default TeacherProfile;

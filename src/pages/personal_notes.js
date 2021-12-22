import React, { useEffect } from "react";

export default function Personal_notes() {
  useEffect(() => {
    document.title = "Personal";
  });
  return <div>Personal Page</div>;
}

import React, { useEffect } from "react";

function RedirectPage() {
  useEffect(() => {
    window.location.replace(
      "https://calendar.notion.so/meet/benjaminjosephherrera/30min",
    );
  }, []);

  return (
    <p>
      <a
        href="https://calendar.notion.so/meet/benjaminjosephherrera/30min"
        className="text-blue-400 underline"
      >
        <></>
      </a>
    </p>
  );
}

export default RedirectPage;

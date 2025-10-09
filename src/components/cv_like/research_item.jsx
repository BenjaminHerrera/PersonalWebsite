// CvItem.jsx
import React from "react";

export default function ResearchItem({
  title,
  date,                // e.g., "Oct 2025"
  authors = [],        // [{ name, you?: true, marker?: "*" }]
  note,                // e.g., "Submitting to MLSys ’26"
  links = [],          // [{ label: "paper", href: "/paper.pdf" }, ...]
}) {
  return (
    <li className="md:w-3xl md:max-w-3xl group relative rounded-2xl border border-white/20 bg-white/5 p-4 md:p-5 transition-colors hover:border-white/50 hover:drop-shadow-lg hover:drop-shadow-white/30">
      <div className="md:grid md:grid-cols-[1fr_auto] md:gap-x-10">
        {/* Left */}
        <div>
          {/* Title */}
          <p className="text-[24px] font-semibold tracking-tight text-white">
            {title}
          </p>

          {/* Authors + note */}
          <div className="mt-1 text-sm text-zinc-300">
            {authors.map((a, i) => (
              <React.Fragment key={a.name}>
                <span
                  className={
                    a.you
                      ? "font-semibold underline decoration-2 underline-offset-2"
                      : ""
                  }
                >
                  {a.name}
                </span>
                {a.marker && (
                  <span
                    className="relative top-[-2px] ml-0.25 text-[1em] select-none"
                    aria-hidden="true"
                  >
                    {a.marker}
                  </span>
                )}
                {i < authors.length - 1 ? <span>, </span> : null}
              </React.Fragment>
            ))}

            {note && (
              <span className="text-white">
                {" "}
                — <em className="not-italic text-white">{note}</em>
              </span>
            )}
          </div>

          {/* Links (below title & authors) */}
          {links.length > 0 && (
            <div className="my-2 md:my-0 md:mt-2 text-sm text-sky-300">
              <span className="text-zinc-400/60"></span>
              {links.map((l, i) => (
                <React.Fragment key={l.label}>
                  {i > 0 && <span className="text-zinc-400/60 mr-[1vw]"></span>}
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
                  >
                    {l.label}
                  </a>
                </React.Fragment>
              ))}
              <span className="text-zinc-400/60"></span>
            </div>
          )}
        </div>

        {/* Right: date (lighter) */}
        {date && (
          <time
            dateTime={date}
            className="text-right text-[24px] text-white"
          >
            {date}
          </time>
        )}
      </div>
    </li>
  );
}

// ExperienceItem.jsx
import React from "react";

function initialsFrom(name = "") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function ExperienceItem({
  title,
  org,
  location,
  date,
  logoSrc,
  logoAlt,
  meta,
  bullets = [],
}) {
  return (
    <li className="group relative md:w-3xl md:max-w-3xl rounded-2xl border border-white/20 bg-white/5 p-4 transition-colors hover:border-white/40 hover:drop-shadow-lg hover:drop-shadow-white/20 md:p-5">
      {/* Top row: logo | content (stays side-by-side) */}
      <div className="flex items-start gap-4">
        {/* Logo (fixed size) */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 md:h-20 md:w-20">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt || org}
              className="max-h-full max-w-full object-contain p-1.5 rounded-xl"
              loading="lazy"
            />
          ) : (
            <span className="text-lg font-semibold text-white/80 md:text-xl">
              {initialsFrom(org)}
            </span>
          )}
        </div>

        {/* Content column */}
        <div className="min-w-0 flex-1">
          {/* Row inside content: [text block | date] */}
          <div className="flex items-start justify-between gap-3">
            {/* Text block wraps inside, stays beside logo */}
            <div className="min-w-0">
              <h3 className="block w-full text-[18px] font-semibold tracking-tight text-white md:text-[20px]">
                {title && <span className="text-white"><b>{title}</b></span>}
                {org && <span className="text-white/80">, {org}</span>}
              </h3>

              {location && (
                <p className="mt-0.5 w-full text-sm text-white/60 break-words">
                  {location}{meta && (<> — </>)}{meta}
                </p>
              )}

              {/* {meta && (
                <p className="mt-1 w-full text-sm text-zinc-300 break-words">
                  {meta}
                </p>
              )} */}
            </div>

            {/* Date pinned right */}
            {date && (
              <time
                dateTime={date}
                className="shrink-0 whitespace-nowrap text-right text-[16px] text-white tabular-nums md:text-[20px]"
              >
                {date}
              </time>
            )}
          </div>

          {/* Bullets below, aligned with content column */}
          {bullets.length > 0 && (
            <div className="mt-2 text-[12px] text-zinc-200">
              {bullets.map((b, i) => (
                <div key={i} className="marker:text-zinc-400">
                  {b}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

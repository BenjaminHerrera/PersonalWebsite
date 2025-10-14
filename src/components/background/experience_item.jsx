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
    <li className="group relative rounded-2xl border border-white/20 bg-white/5 p-4 transition-colors hover:border-white/40 hover:drop-shadow-lg hover:drop-shadow-white/20 md:w-3xl md:max-w-3xl md:p-5">
      {/* Top row: logo | content */}
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 md:h-20 md:w-20">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt || org}
              className="max-h-full max-w-full rounded-xl object-contain p-1.5"
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
          {/* sm: stack [date] then [text]; md+: row [text | date] */}
          <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-3">
            {/* Date */}
            {date && (
              <time
                dateTime={date}
                className="order-1 shrink-0 self-start text-[16px] whitespace-nowrap text-white tabular-nums md:order-2 md:self-auto md:text-[20px]"
              >
                {date}
              </time>
            )}

            {/* Text block */}
            <div className="order-2 min-w-0 md:order-1">
              <h3 className="block w-full text-[18px] font-semibold tracking-tight text-white md:text-[20px]">
                {title && (
                  <span className="text-white">
                    <b>{title}</b>
                  </span>
                )}
                {org && <span className="text-white/80">, {org}</span>}
              </h3>

              {(location || meta) && (
                <p className="mt-0.5 w-full text-sm break-words text-white/60">
                  {location}
                  {meta && <> — {meta}</>}
                </p>
              )}
            </div>
          </div>

          {/* Bullets */}
          {bullets.length > 0 && (
            <ul className="mt-2 list-disc pl-5 text-[12px] text-zinc-200">
              {bullets.map((b, i) => (
                <li key={i} className="marker:text-zinc-400">
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

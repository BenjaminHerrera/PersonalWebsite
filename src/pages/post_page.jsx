import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import NavBar from "../components/navbar.jsx";
import remarkGfm from "remark-gfm";
import config from "../config.jsx";

export default function Post() {
  const { slug } = useParams();
  const [meta, setMeta] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const url = `https://raw.githubusercontent.com/BenjaminHerrera/PersonalPosts/main/${encodeURIComponent(slug)}/main.md`;
        console.log("Fetching:", url);
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        const [data, body] = parseFrontMatter(text);
        setMeta(data);
        setContent(body);
      } catch (e) {
        console.error(e);
        setMeta({});
        setContent(`# Not found\n\nCouldn’t load this post.`);
      }
    })();
  }, [slug]);

  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavBar />
      </div>
      <div className="mx-auto mt-[14vh] max-w-2xl">
        <p className="libre-franklin-bold mb-2 text-[32px] font-bold lg:text-[48px]">
          {meta.title}
        </p>
        {meta.date && <p className="mb-8 text-gray-400">{meta.date}</p>}
        <hr />
        <br />
        <br />
        <br />
        <article className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

function parseFrontMatter(raw) {
  if (!raw.startsWith("---")) return [{}, raw];
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return [{}, raw];
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trim();
  const data = Object.fromEntries(
    fm.split("\n").map((line) => {
      const [k, ...rest] = line.split(":");
      return [k.trim(), rest.join(":").trim().replace(/^"|"$/g, "")];
    }),
  );
  return [data, body];
}

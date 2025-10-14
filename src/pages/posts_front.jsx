import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import PostsCard from "../components/posts/PostsCard.jsx";
import { post_items } from "../utils/post_list.jsx";

export default function PostsFront() {
  console.log(post_items)

  // Render the first page of the posts page
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Base Color*/}
        <div className="absolute inset-0 bg-[#15141a]" />

        {/* Image Overlay With Fade to Transparent */}
        <div
          className="absolute top-0 left-0 h-[110vh] w-full bg-cover bg-top bg-no-repeat "
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/6072455/pexels-photo-6072455.jpeg")`,
            maskImage:
              "linear-gradient(to bottom, black 5%, rgba(0,0,0,0.1) 47%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 5%, rgba(0,0,0,0.1) 47%, transparent 100%)",
          }}
        />

        {/* Blur effect */}
        <div
          className="pointer-events-none absolute top-[35vh] left-0 h-[100vh] w-full backdrop-blur-3xl md:h-[75vh]"
          style={{
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />

        {/* Dark Tint */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <div className="fixed top-0 left-0 z-50 w-full">
          <NavBar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center pt-[15vh] md:pt-[16vh] lg:pt-[20vh]">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-center text-[24px] md:text-[192px]">
            <div className="libre-franklin-bold text-[48px] text-shadow-lg md:text-[80px] lg:text-[112px]">
              📩 Ben's Posts
            </div>
          </div>

          {/* News Grid */}
          <div className="mx-auto mt-[4vh] grid max-w-7xl grid-cols-1 gap-[32px] px-8 py-4 md:mt-[5vh] md:grid-cols-2 lg:mt-[7vh] xl:grid-cols-3">
            {post_items.map((item, index) => (
              <Link key={item.slug} to={`/posts/${item.slug}`}>
                <PostsCard key={index} title={item.title} text={item.text} image={item.image} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Greeting from "../components/front_page/greeting";
import NavBar from "../components/navbar";

export default function Frontpage() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-100 w-full">
        <NavBar />
      </div>

      <Greeting />
    </div>
  );
}

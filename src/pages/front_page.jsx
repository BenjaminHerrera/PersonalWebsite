import Greeting from "../components/front_page/greeting";
import NavBar from "../components/navbar";
import WhoAmI from "../components/front_page/who_am_i";
import ResearchInterests from "../components/front_page/research";
import Background from "./background";
import ContactMe from "../components/front_page/contact_me";

export default function Frontpage() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-100 w-full">
        <NavBar />
      </div>

      <Greeting />
      <WhoAmI />
      <ResearchInterests />
      <Background include_navbar={false} />
      <ContactMe />
    </div>
  );
}

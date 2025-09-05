import react from "react";
import { NavLink } from "react-router-dom";
import SingleLevelDropdownMenu from "./SingleLevelDropdownMenu";
import { FaTag, FaFeather, FaBug, FaPaw, FaStar, FaTractor, FaDragon, FaLizard, FaFish, FaHippo, FaTree, FaComments, FaCart, FaUserCircle, FaEnvelope, FaQuestionCircle, FaBook,  FaLifeRing, FaLeaf } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-menus">
        <NavLink to="/" className="nav-home">
          Home
        </NavLink>

        <SingleLevelDropdownMenu
          buttonLabel="Products"
          menuItems={
            [
              { title: "All Products", url: "/allproductspage", icon: <FaTag aria-label="Price Tag" />  },
              { title: "Birds", url: "/birdspage", icon: <FaFeather aria-label="Bird Feather" /> },
              { title: "Bugs", url: "/bugspage", icon: <FaBug aria-label="Bug" /> },
              { title: "Cats & Dogs", url: "/catsdogspage", icon: <FaPaw aria-label="Cat Dog Paw Print" /> },
              { title: "Custom Request", url: "/customrequestpage", icon: <FaStar aria-label="Star" /> },
              { title: "Farm Life", url: "/farmlifepage", icon: <FaTractor aria-label="Farm Tractor" /> },
              { title: "Mythical Creatures", url: "/mythicalcreaturespage", icon: <FaDragon aria-label="Dragon" /> },
              { title: "Reptiles & Amphibians", url: "/reptilesandamphibianspage", icon: <FaLizard aria-label="Lizard"/> },
              { title: "Sea Creatures", url: "/seacreaturespage", icon: <FaFish aria-label="Fish" /> },
              { title: "Wild Animals", url: "/wildanimalspage", icon: <FaHippo aria-label="Hippo" /> },
              { title: "Woodland Creatures", url: "/woodlandcreaturespage", icon: <FaTree aria-label="Tree"/> },
            ]}
        />

        <SingleLevelDropdownMenu
          buttonLabel="Account"
          menuItems={
            [
              { title: "Messages", url: "/messagespage", icon: <FaComments aria-label="Chat Bubble" /> },
              { title: "Orders", url: "/orderspage", icon: <FaCart aria-label="Shopping Cart" /> },
              { title: "Profile", url: "/profilepage", icon: <FaUserCircle aria-label="User Circle" /> },
            ]}
        />

        <SingleLevelDropdownMenu
          buttonLabel="Information"
          menuItems={
            [
              { title: "Contact Us", url: "/contactuspage", icon: <FaEnvelope aria-label="Letter Envelope" /> },
              { title: "FAQ", url: "/faqpage", icon: <FaQuestionCircle aria-label="Question Mark in Circle" /> },
              { title: "Our Story", url: "/ourstorypage", icon: < FaBook aria-label="Open Book" /> },
              { title: "Support", url: "/supportpage", icon: <FaLifeRing aria-label="Life Ring" /> },
              { title: "Sustainability", url: "/sustainabilitypage", icon: <FaLeaf aria-label="Tree Leaf" /> },
            ]}
        />

      </div>
    </nav>
  );
}
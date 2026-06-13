import React from "react";
import "./Services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <MdDesignServices />,
    title: "Web Design",
    p: "Modern and responsive designs focused on usability, clarity, and a seamless user experience.",
  },
  {
    id: 2,
    icon: <IoIosRocket />,
    title: "Fast Performance",
    p: "Optimized performance ensuring fast loading, smooth interactions, and high efficiency across all devices.",
  },
  {
    id: 3,
    icon: <FaCode />,
    title: "Clean Code",
    p: "Well‑structured, maintainable, and scalable code following best practices and modern development standards.",
  },
  {
    id: 4,
    icon: <FaTiktok />,
    title: "TikTok Ads",
    p: "Creating and managing high‑performance TikTok ad campaigns to reach targeted audiences and maximize conversions.",
  },
  {
    id: 5,
    icon: <FaSnapchatGhost />,
    title: "Snapchat Ads",
    p: "Professional Snapchat advertising with precise targeting to increase reach, engagement, and business results.",
  },
];
function Services() {
  return (
    <section id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2 className="main_title">Services</h2>
      </div>
<div className="container container_services">
  {servicesData.map(({ id, icon, title, p }) => (
    <article key={id} className="artical_service">
      <div className="card_artical">
        {icon}
        <h3>{title}</h3>
        <p>{p}</p>
      </div>
    </article>
  ))}
</div>

    </section>
  );
}

export default Services;

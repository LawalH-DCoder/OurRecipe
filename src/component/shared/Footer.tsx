import { Instagram, Twitter, Youtube } from "lucide-react";

const links = {
  Explore: ["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"],
  Company: ["About Us", "Blog", "Careers", "Press"],
  Support: ["FAQ", "Contact", "Privacy Policy", "Terms"],
};

const Footer = () => {
  return (
    <footer
      className="w-full mt-20"
      style={{
        backgroundColor: "var(--text-primary)",
        color: "var(--bg-secondary)",
      }}
    >
      <div className="max-w-[1440px] mx-auto md:px-12 sm:px-8 px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold tracking-[-0.5px] mb-3">
              Recip
              <em className="not-italic italic text-[#F97316]">io</em>
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-tertiary)]">
              Discover, cook, and share recipes that bring people together.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "var(--text-tertiary)",
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p
                className="text-xs font-bold tracking-[1.5px] uppercase mb-4"
                style={{ color: "#F97316" }}
              >
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors duration-150"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="w-full h-px mb-6"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            © {new Date().getFullYear()} Recipio. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            Made with <span style={{ color: "#F97316" }}>♥</span> for food
            lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

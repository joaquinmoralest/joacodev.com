import SocialNetworks from "./SocialNetworks";

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-display text-sm font-semibold text-ink-400">
          © {new Date().getFullYear()} Joaco
          <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">Dev</span>
        </p>
        <SocialNetworks />
      </div>
    </footer>
  );
}

export default Footer;

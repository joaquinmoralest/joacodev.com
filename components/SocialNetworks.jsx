import Image from "next/image";

const networks = [
  {
    href: "https://www.instagram.com/joacodev_cl/",
    src: "/icons/instagram.svg",
    alt: "Instagram",
    size: 22,
  },
  {
    href: "https://twitter.com/JoacoDev_cl",
    src: "/icons/twitter.svg",
    alt: "Twitter",
    size: 26,
  },
  {
    href: "https://www.linkedin.com/in/joaquin-morales-trincado/",
    src: "/icons/linkedin.svg",
    alt: "LinkedIn",
    size: 20,
  },
  {
    href: "https://github.com/joaquinmoralest",
    src: "/icons/github.svg",
    alt: "GitHub",
    size: 24,
  },
];

function SocialNetworks({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {networks.map(({ href, src, alt, size }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="opacity-70 transition hover:opacity-100 hover:-translate-y-0.5"
          aria-label={alt}
        >
          <Image src={src} width={size} height={size} alt={alt} />
        </a>
      ))}
    </div>
  );
}

export default SocialNetworks;

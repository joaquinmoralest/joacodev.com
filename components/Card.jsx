import Tag from "./Tag";

function Card({ src, title, description, tags, repoUrl, demoUrl }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 hover:shadow-glow">
      <div className="relative aspect-video overflow-hidden bg-ink-800">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`Previsualización del proyecto ${title}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand-600/30 to-accent-600/20">
            <span className="font-display text-lg font-bold text-white/80">{title}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="font-display text-lg font-bold text-white">{title}</h3>
          {description && (
            <p className="mt-2 max-h-[4.5rem] overflow-hidden text-sm leading-6 text-ink-400">{description}</p>
          )}
        </div>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag.id || tag.name} name={tag.name} />
            ))}
          </div>
        )}

        <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
          {repoUrl ? (
            <a href={repoUrl} target="_blank" rel="noreferrer" className="secondary-button text-xs sm:text-sm">
              Repositorio
            </a>
          ) : (
            <span className="secondary-button cursor-not-allowed text-xs opacity-40 sm:text-sm">Repositorio</span>
          )}
          {demoUrl ? (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="primary-button text-xs sm:text-sm">
              Demo
            </a>
          ) : (
            <span className="primary-button cursor-not-allowed text-xs opacity-40 sm:text-sm">Demo</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;

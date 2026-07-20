function Tag({ name }) {
  return (
    <span className="inline-flex rounded-lg border border-brand-400/20 bg-brand-500/10 px-2.5 py-1 text-xs font-semibold text-brand-300">
      {name}
    </span>
  );
}

export default Tag;

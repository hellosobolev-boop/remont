export function Picture({ src, avif, alt, className = '', priority = false }) {
  return (
    <picture className={className}>
      {avif && <source srcSet={avif} type="image/avif" />}
      <img src={src} alt={alt} width="1600" height="1067" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
    </picture>
  );
}

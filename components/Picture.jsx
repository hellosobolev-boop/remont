export function Picture({ src, avif, alt, className = '', priority = false }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const withBasePath = value => value?.startsWith('/') ? `${basePath}${value}` : value;

  return (
    <picture className={className}>
      {avif && <source srcSet={withBasePath(avif)} type="image/avif" />}
      <img src={withBasePath(src)} alt={alt} width="1600" height="1067" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
    </picture>
  );
}

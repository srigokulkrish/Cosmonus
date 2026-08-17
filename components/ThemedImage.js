export default function ThemedImage({ srcDark, srcLight, alt, ratio, className = '' }) {
  return (
    <div className={`themed-img ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img src={srcDark} alt={alt} className="themed-img__dark" loading="lazy" />
      <img src={srcLight} alt={alt} className="themed-img__light" loading="lazy" />
    </div>
  )
}

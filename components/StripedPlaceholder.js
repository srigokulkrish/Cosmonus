export default function StripedPlaceholder({ label, ratio, className = '' }) {
  return (
    <div className={`placeholder ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <span className="placeholder__label mono">{label}</span>
    </div>
  )
}

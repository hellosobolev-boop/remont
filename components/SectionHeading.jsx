export default function SectionHeading({ index, eyebrow, title, copy }) {
  return <div className="section-heading"><span className="section-index">{index}</span><div><p className="eyebrow dark">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div></div>;
}

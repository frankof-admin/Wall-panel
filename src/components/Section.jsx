export default function Section({ sectionCssWidth, sectionNumber }) {
  return sectionCssWidth && sectionNumber > 1 ? (
    <div className="section" style={{ width: sectionCssWidth }}></div>
  ) : (
    <></>
  );
}

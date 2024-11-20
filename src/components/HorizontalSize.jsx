export default   function HorizontalSize({ panelCssWidth, panelWidth, sectionWidth, sectionCssWidth, sectionNumber }) {
  const hasInnerLine = (sectionCssWidth && sectionNumber > 1) ? 'has-inner-line' : '';
  const classes = `bottom-size-wrapper ${hasInnerLine}`;

  return (
    <>
    <div
      className={classes}
      style={{
        width: panelCssWidth,
      }}
    >
      { (hasInnerLine) &&
      <div className="horizontal-line-inner" style={{ width: sectionCssWidth }}>
        <div className="horizontal-line-text">{sectionWidth}</div>
      </div> }
      <div className="horizontal-line">
        <div className="horizontal-line-text">{panelWidth}</div>
      </div>
    </div>
    </>
  );
}
export default function VerticalSize({ panelCssHeight, panelHeight }) {
  return (
    <div className="right-size-wrapper" style={{ height: panelCssHeight }}>
      <div className="vertical-line">
        <div className="vertical-line-text">{panelHeight}</div>
      </div>
    </div>
  );
}

export default function PanelControlPanel({
  panelSize,
  sectionNumber,
  onSizeChange,
  onNumberChange,
}) {
  return (
    <div className="menu-column-wrapper">
      <div className="menu-input-wrapper">
        <label htmlFor={1}>Ширина панелі (мм):</label>
        <input
          id={1}
          value={panelSize.width}
          onChange={(e) =>
            onSizeChange({
              ...panelSize,
              width: e.target.value,
            })
          }
          name="panel Width"
          type="number"
        />
      </div>
      <div className="menu-input-wrapper">
        <label htmlFor={2}>Висота напелі (мм):</label>
        <input
          id={2}
          value={panelSize.height}
          onChange={(e) =>
            onSizeChange({
              ...panelSize,
              height: e.target.value,
            })
          }
          name="panel height"
          type="number"
        />
      </div>
      <div className="menu-input-wrapper">
        <label htmlFor={3}>Кількість секцій:</label>
        <input
          id={3}
          value={sectionNumber}
          onChange={(e) => onNumberChange(e?.target.value)}
          name="section number"
          type="number"
          min="1"
          max="15"
        />
      </div>
    </div>
  );
}

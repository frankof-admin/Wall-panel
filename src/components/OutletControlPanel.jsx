export default function OutletControlPanel({
  outletSize,
  outletPosition,
  onSizeChange,
  onPositionChange,
}) {
  return (
    <div className="menu-column-wrapper">
      <div className="menu-input-wrapper">
        <label htmlFor={4}>Ширина вирізу (мм):</label>
        <input
          id={4}
          value={outletSize?.width}
          onChange={(e) =>
            onSizeChange({
              ...outletSize,
              width: e?.target.value,
            })
          }
          name="outlet width"
          type="number"
        />
      </div>
      <div className="menu-input-wrapper">
        <label htmlFor={5}>Висота вирізу (мм):</label>
        <input
          id={5}
          value={outletSize?.height}
          onChange={(e) =>
            onSizeChange({
              ...outletSize,
              height: e?.target.value,
            })
          }
          name="outlet height"
          type="number"
        />
      </div>
      <div className="menu-input-wrapper">
        <label htmlFor={6}>Відступ по горизонталі (мм):</label>
        <input
          id={6}
          value={outletPosition?.left}
          onChange={(e) =>
            onPositionChange({
              ...outletPosition,
              left: e.target.value,
            })
          }
          name="outlet position x"
          type="number"
        />
      </div>
      <div className="menu-input-wrapper">
        <label htmlFor={7}>Відступ по вертикалі (мм):</label>
        <input
          id={7}
          value={outletPosition?.top}
          onChange={(e) =>
            onPositionChange({
              ...outletPosition,
              top: e.target.value,
            })
          }
          name="outlet position y"
          type="number"
        />
      </div>
    </div>
  );
}

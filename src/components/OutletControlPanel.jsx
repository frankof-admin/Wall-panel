import ControlPanelInput from "./ControlPanelInput";

export default function OutletControlPanel({
  outletSize,
  outletPosition,
  onSizeChange,
  onPositionChange,
}) {
  const positionChangeHandler = (e, dimension, dimensionKey) => {
    onPositionChange({
      ...dimension,
      [dimensionKey]: e?.target.value,
    });
  };

  return (
    <div className="menu-column-wrapper">
      <ControlPanelInput
        id={4}
        label={"Ширина вирізу (мм):"}
        dimension={outletSize}
        dimensionKey={"width"}
        name={"outlet width"}
        setFunc={onSizeChange}
      />
      <ControlPanelInput
        id={5}
        label={"Висота вирізу (мм):"}
        dimension={outletSize}
        dimensionKey={"height"}
        name={"outlet height"}
        setFunc={onSizeChange}
      />
      <ControlPanelInput
        id={6}
        label={"Відступ по горизонталі (мм):"}
        dimension={outletPosition}
        dimensionKey={"left"}
        name={"outlet position x"}
        setFunc={onPositionChange}
      />
      <ControlPanelInput
        id={6}
        label={"Відступ по вертикалі (мм):"}
        dimension={outletPosition}
        dimensionKey={"top"}
        name={"outlet position y"}
        setFunc={onPositionChange}
      />
    </div>
  );
}

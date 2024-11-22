import React from "react";
import ControlPanelInput from "./ControlPanelInput";

export default function PanelControlPanel({
  panelSize,
  sectionNumber,
  onSizeChange,
  onNumberChange,
}) {
  return (
    <div className="menu-column-wrapper">
      <ControlPanelInput
        id={1}
        label={"Ширина панелі (мм):"}
        dimension={panelSize}
        dimensionKey={"width"}
        name={"panel width"}
        setFunc={onSizeChange}
      />
      <ControlPanelInput
        id={2}
        label={"Ширина панелі (мм):"}
        dimension={panelSize}
        dimensionKey={"height"}
        name={"panel height"}
        setFunc={onSizeChange}
      />
      <ControlPanelInput
        id={3}
        label={"Кількість секцій:"}
        dimension={sectionNumber}
        dimensionKey={"number"}
        name={"section number"}
        setFunc={onNumberChange}
      />
    </div>
  );
}

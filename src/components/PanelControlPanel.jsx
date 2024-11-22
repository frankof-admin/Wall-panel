import React from "react";
import { useAtom } from "jotai";
import {
  panelSizeAtom,
  sectionNumberAtom,
} from "./../atoms";
import ControlPanelInput from "./ControlPanelInput";

export default function PanelControlPanel() {
  const [panelSize, setPanelSize] = useAtom(panelSizeAtom);
  const [sectionNumber, setSectionNumber] = useAtom(sectionNumberAtom);

  return (
    <div className="menu-column-wrapper">
      <ControlPanelInput
        id={1}
        label={"Ширина панелі (мм):"}
        dimension={panelSize}
        dimensionKey={"width"}
        name={"panel width"}
        setFunc={setPanelSize}
      />
      <ControlPanelInput
        id={2}
        label={"Ширина панелі (мм):"}
        dimension={panelSize}
        dimensionKey={"height"}
        name={"panel height"}
        setFunc={setPanelSize}
      />
      <ControlPanelInput
        id={3}
        label={"Кількість секцій:"}
        dimension={sectionNumber}
        dimensionKey={"number"}
        name={"section number"}
        setFunc={setSectionNumber}
      />
    </div>
  );
}

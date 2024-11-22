import React from "react";
import { useAtom } from "jotai";
import { outletSizeAtom, outletPositionAtom } from "./../atoms";
import ControlPanelInput from "./ControlPanelInput";

export default function OutletControlPanel() {
  const [outletSize, setOutletSize] = useAtom(outletSizeAtom);
  const [outletPosition, setOutletPosition] = useAtom(outletPositionAtom);

  return (
    <div className="menu-column-wrapper">
      <ControlPanelInput
        id={"outletWidth"}
        label={"Ширина вирізу (мм):"}
        dimension={outletSize}
        dimensionKey={"width"}
        name={"outlet width"}
        setFunc={setOutletSize}
      />
      <ControlPanelInput
        id={"outletHeight"}
        label={"Висота вирізу (мм):"}
        dimension={outletSize}
        dimensionKey={"height"}
        name={"outlet height"}
        setFunc={setOutletSize}
      />
      <ControlPanelInput
        id={"outletPositionX"}
        label={"Відступ по горизонталі (мм):"}
        dimension={outletPosition}
        dimensionKey={"left"}
        name={"outlet position x"}
        setFunc={setOutletPosition}
      />
      <ControlPanelInput
        id={"outletPositionY"}
        label={"Відступ по вертикалі (мм):"}
        dimension={outletPosition}
        dimensionKey={"top"}
        name={"outlet position y"}
        setFunc={setOutletPosition}
      />
    </div>
  );
}

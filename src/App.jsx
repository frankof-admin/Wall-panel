import React, { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import {
  panelSizeAtom,
  panelCssSizeAtom,
  sectionNumberAtom,
  sectionCssWidthAtom,
  sectionRealWidthAtom,
  scaleAtom,
} from "./atoms";
import PanelControlPanel from "./components/PanelControlPanel";
import OutletControlPanel from "./components/OutletControlPanel";
import Panel from "./components/Panel";
import VerticalSize from "./components/VerticalSize";
import HorizontalSize from "./components/HorizontalSize";
import { useDimensions } from "./useDimensions";
import { convertSize } from "./utils";
import { useScale } from "./useScale";
import "./App.css";

function App() {
  const [panelSize, setPanelSize] = useAtom(panelSizeAtom);
  const [panelCssSize, setPanelCssSize] = useAtom(panelCssSizeAtom);
  const [sectionNumber, setSectionNumber] = useAtom(sectionNumberAtom);
  const [sectionCssWidth, setSectionCssWidth] = useAtom(sectionCssWidthAtom);
  const [, setRealSectionWidth] = useAtom(sectionRealWidthAtom);

  const canvasRef = useRef(null);
  const { width, height } = useDimensions(canvasRef);

  const scale = useScale(panelSize, { width, height });
  const [, setScale] = useAtom(scaleAtom);

  useEffect(() => {
    if (!width || !height) return;

    const size = convertSize(panelSize, scale);
    setPanelCssSize(size);
    setScale(scale);
  }, [width, height, panelSize, scale, setPanelCssSize]);

  useEffect(() => {
    if (!panelCssSize?.width || !sectionNumber?.number) return;

    setSectionCssWidth(panelCssSize.width / sectionNumber.number);
    setRealSectionWidth((panelSize.width / sectionNumber.number).toFixed(2));
  }, [
    panelCssSize?.width,
    sectionNumber?.number,
    panelSize?.width,
    setSectionCssWidth,
    setRealSectionWidth,
  ]);

  return (
    <>
      <div className="menu-wrapper">
        <PanelControlPanel
          panelSize={panelSize}
          sectionNumber={sectionNumber}
          onSizeChange={setPanelSize}
          onNumberChange={setSectionNumber}
        />
        <OutletControlPanel />
      </div>

      <div className="canvas" ref={canvasRef}>
        <div className="panel-wrapper">
          <Panel
            panelCssSize={panelCssSize}
            sectionCssWidth={sectionCssWidth}
            sectionNumber={sectionNumber?.number}
            panelWrapperCssWide={width}
          />
          <VerticalSize />
          <HorizontalSize />
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import {
  panelSizeAtom,
  panelCssSizeAtom,
  panelWrapperCssWideAtom,
  sectionNumberAtom,
  sectionCssWidthAtom,
  sectionRealWidthAtom,
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
  const [, setPanelWrapperCssWide] = useAtom(panelWrapperCssWideAtom);
  const [sectionNumber, setSectionNumber] = useAtom(sectionNumberAtom);
  const [sectionCssWidth, setSectionCssWidth] = useAtom(sectionCssWidthAtom);
  const [realSectionWidth, setRealSectionWidth] = useAtom(sectionRealWidthAtom);

  const canvasRef = useRef(null);
  const { width, height } = useDimensions(canvasRef);

  const scale = useScale(panelSize, { width, height });

  useEffect(() => {
    if (!width || !height) return;

    setPanelWrapperCssWide(width);

    const size = convertSize(panelSize, scale);
    setPanelCssSize(size);
  }, [width, height, panelSize, scale, setPanelCssSize, setPanelWrapperCssWide]);

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
          {/* <div className="break"></div> */}
          <HorizontalSize />
        </div>
      </div>
    </>
  );
}

export default App;

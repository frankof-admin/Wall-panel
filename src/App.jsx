import React from "react";
import { useAtom } from "jotai";
import {
  panelSizeAtom,
  panelCssSizeAtom,
  panelWrapperCssWideAtom,
  sectionNumberAtom,
  sectionCssWidthAtom,
  sectionRealWidthAtom,
} from "./atoms";
import { useRef, useEffect } from "react";
import PanelControlPanel from "./components/PanelControlPanel";
import OutletControlPanel from "./components/OutletControlPanel";
import Panel from "./components/Panel";
import VerticalSize from "./components/VerticalSize";
import HorizontalSize from "./components/HorizontalSize";
import { useDimensions } from "./useDimensions";
import { convertSize } from "./utils";
import "./App.css";

function App() {
  const [panelSize, setPanelSize] = useAtom(panelSizeAtom);
  const [panelCssSize, setPanelCssSize] = useAtom(panelCssSizeAtom);
  const [panelWrapperCssWide, setPanelWrapperCssWide] = useAtom(
    panelWrapperCssWideAtom,
  );
  const [sectionNumber, setSectionNumber] = useAtom(sectionNumberAtom);
  const [sectionCssWidth, setSectionCssWidth] = useAtom(sectionCssWidthAtom);
  const [realSectionWidth, setRealSectionWidth] = useAtom(sectionRealWidthAtom);
  const panelWrapperRef = useRef(null);
  const { width: panelWrapperWide } = useDimensions(panelWrapperRef);

  function handleSectionSizeChange() {
    setSectionCssWidth(panelCssSize?.width / sectionNumber?.number);
    setRealSectionWidth((panelSize?.width / sectionNumber?.number).toFixed(2));
  }

  useEffect(() => {
    if (panelWrapperWide !== 0) {
      setPanelWrapperCssWide(panelWrapperWide);
      const size = convertSize(panelSize, panelWrapperWide);
      setPanelCssSize(size);
    }
  }, [panelWrapperWide, panelSize]);

  useEffect(() => {
    handleSectionSizeChange();
  }, [panelSize, panelCssSize, sectionNumber]);

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
      <div className="panel-wrapper" ref={panelWrapperRef}>
        <Panel
          panelCssSize={panelCssSize}
          sectionCssWidth={sectionCssWidth}
          sectionNumber={sectionNumber?.number}
          panelWrapperCssWide={panelWrapperCssWide}
        />
        <VerticalSize
          panelCssHeight={panelCssSize?.height}
          panelHeight={panelSize?.height}
        />
        <div className="break"></div>
        <HorizontalSize
          panelCssWidth={panelCssSize?.width}
          panelWidth={panelSize?.width}
          sectionWidth={realSectionWidth}
          sectionCssWidth={sectionCssWidth}
          sectionNumber={sectionNumber?.number}
        />
      </div>
    </>
  );
}

export default App;

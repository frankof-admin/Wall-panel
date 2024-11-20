import React from "react";
import { useState, useRef, useEffect } from "react";
import PanelControlPanel from "./components/PanelControlPanel";
import OutletControlPanel from "./components/OutletControlPanel";
import Panel from "./components/Panel";
import VerticalSize from "./components/VerticalSize";
import HorizontalSize from "./components/HorizontalSize";
import { useDimensions } from "./useDimensions";
import { convertSize } from "./utils";
import "./App.css";

function App() {
  const [panelSize, setPanelSize] = useState({ width: 300, height: 200 });
  const [panelCssSize, setPanelCssSize] = useState(null);
  const [sectionNumber, setSectionNumber] = useState({ number: 1 });
  const [outletSize, setOutletSize] = useState({ width: 20, height: 20 });
  const [outletPosition, setOutletPosition] = useState({ top: 20, left: 20 });
  const [sectionCssWidth, setSectionCssWidth] = useState();
  const [realSectionWidth, setRealSectionWidth] = useState();
  const panelWrapperRef = useRef(null);
  const { width: panelWrapperCssWide } = useDimensions(panelWrapperRef);

  function handleSectionSizeChange() {
    setSectionCssWidth(panelCssSize?.width / sectionNumber?.number);
    setRealSectionWidth((panelSize?.width / sectionNumber?.number).toFixed(2));
  }

  useEffect(() => {
    if (panelWrapperCssWide !== 0) {
      const size = convertSize(panelSize, panelWrapperCssWide);
      setPanelCssSize(size);
    }
  }, [panelWrapperCssWide, panelSize]);

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
        <OutletControlPanel
          outletSize={outletSize}
          outletPosition={outletPosition}
          onSizeChange={setOutletSize}
          onPositionChange={setOutletPosition}
        />
      </div>
      <div className="panel-wrapper" ref={panelWrapperRef}>
        <Panel
          panelCssSize={panelCssSize}
          sectionCssWidth={sectionCssWidth}
          sectionNumber={sectionNumber?.number}
          outletSize={outletSize}
          outletPosition={outletPosition}
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

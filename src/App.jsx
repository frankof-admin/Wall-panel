import React from "react";
import { useState, useRef, useEffect } from "react";
import { useDimensions } from "./useDimensions";
import "./App.css";

function App() {
  const [panelSize, setPanelSize] = useState({ width: 300, height: 200 });
  const [sectionNumber, setSectionNumber] = useState(1);
  const [outletSize, setOutletSize] = useState({ width: 20, height: 20 });
  const [outletPosition, setOutletPosition] = useState({ top: 20, left: 20 });
  const [sectionCssWidth, setSectionCssWidth] = useState();
  const [realSectionWidth, setRealSectionWidth] = useState();
  const multiplier = 4000;
  const canvasWrapperRef = useRef(null);
  const panelInputRef = useRef(null);
  const { width: canvasWrapperCssWide } =
    useDimensions(canvasWrapperRef);

  function sectionNumberChangeHandler() {
    let number = panelInputRef.current.value;
    setSectionNumber(number);
    if (number > 0) {
      setSectionCssWidth(canvasWrapperCssWide / number);
      setRealSectionWidth((panelSize.width / number).toFixed(2));
    }
  }

  useEffect(() => {
    setSectionCssWidth(canvasWrapperCssWide / panelInputRef.current.value);
    setRealSectionWidth((panelSize.width / panelInputRef.current.value).toFixed(2));
  }, [panelSize, canvasWrapperCssWide, panelInputRef]);

  function Panel({ index }) {
    return sectionCssWidth && sectionNumber > 1 ? (
      <div className="panel" style={{ width: sectionCssWidth }}>
        {index == 0 && (
          <div className="horizontal-line">
            <div className="horizontal-line-text">{realSectionWidth}</div>
          </div>
        )}
      </div>
    ) : (
      <></>
    );
  }

  function Canvas() {
    const canvasCssSize = {
      width: `${(panelSize.width/canvasWrapperCssWide) * multiplier}px`,
      height: `${(panelSize.height/canvasWrapperCssWide) * multiplier}px`,
    };

    return (
      <div className="canvas" style={{ ...canvasCssSize }}>
        <Outlet />
        { Array.from({ length: sectionNumber }, (_, index) => (
            <Panel key={index} index={index} />
        )) }
      </div>
    );
  }

  function Outlet() {

    const outletCssSize = {
      width: `${((outletSize.width/canvasWrapperCssWide) * multiplier) - 1}px`,
      height: `${((outletSize.height/canvasWrapperCssWide) * multiplier) + 1}px`,
    };

    const outletCssPosition = {
      top: `${((outletPosition.top/canvasWrapperCssWide) * multiplier)}px`,
      left: `${((outletPosition.left/canvasWrapperCssWide) * multiplier)}px`,
    };

    return (
      <div
        className="panel-outlet"
        style={{ ...outletCssSize, ...outletCssPosition }}
      ></div>
    );
  }

  function VerticalSize() {
    return (
      <div className="right-size-wrapper" style={{ height: `${(panelSize.height/canvasWrapperCssWide) * multiplier}px` }}>
        <div className="vertical-line">
          <div className="vertical-line-text">{panelSize.height}</div>
        </div>
      </div>
    )
  }

  function HorizontalSize() {
    return (
      <div className="bottom-size-wrapper" style={{ width: `${(panelSize.width/canvasWrapperCssWide) * multiplier}px` }}>
        <div className="horizontal-line">
          <div className="horizontal-line-text">{panelSize.width}</div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-colum-wrapper">
          <div className="menu-input-wrapper">
            <label htmlFor={1}>Ширина панелі:</label>
            <input
              id={1}
              value={panelSize.width}
              onChange={(e) =>
                setPanelSize({
                  ...panelSize,
                  width: e.target.value,
                })
              }
              name="panel Width"
              type="number"
            />
          </div>
          <div className="menu-input-wrapper">
            <label htmlFor={2}>Висота напелі:</label>
            <input
              id={2}
              value={panelSize.height}
              onChange={(e) =>
                setPanelSize({
                  ...panelSize,
                  height: e.target.value,
                })
              }
              name="panel height"
              type="number"
            />
          </div>
        </div>
        <div className="menu-colum-wrapper">
          <div className="menu-input-wrapper">
            <label htmlFor={3}>Кількість секцій:</label>
            <input
              id={3}
              value={sectionNumber}
              onChange={() => sectionNumberChangeHandler()}
              name="section number"
              type="number"
              min="1"
              max="15"
              ref={panelInputRef}
            />
          </div>
          <div className="menu-input-wrapper">
            <label htmlFor={4}>Ширина вирізу:</label>
            <input
              id={4}
              value={outletSize.width}
              onChange={(e) =>
                setOutletSize({
                  ...outletSize,
                  width: e.target.value,
                })
              }
              name="outlet width"
              type="number"
            />
          </div>
        </div>
        <div className="menu-colum-wrapper">
          <div className="menu-input-wrapper">
            <label htmlFor={5}>Висота вирізу:</label>
            <input
              id={5}
              value={outletSize.height}
              onChange={(e) =>
                setOutletSize({
                  ...outletSize,
                  height: e.target.value,
                })
              }
              name="outlet height"
              type="number"
            />
          </div>
          <div className="menu-input-wrapper">
            <label htmlFor={6}>Відступ по горизонталі:</label>
            <input
              id={6}
              value={outletPosition.left}
              onChange={(e) =>
                setOutletPosition({
                  ...outletPosition,
                  left: e.target.value,
                })
              }
              name="outlet position x"
              type="number"
            />
          </div>
        </div>
        <div className="menu-colum-wrapper">
          <div className="menu-input-wrapper">
            <label htmlFor={7}>Відступ по вертикалі:</label>
            <input
              id={7}
              value={outletPosition.top}
              onChange={(e) =>
                setOutletPosition({
                  ...outletPosition,
                  top: e.target.value,
                })
              }
              name="outlet position y"
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="canvas-wrapper" ref={canvasWrapperRef}>
          <Canvas />
          <VerticalSize />
          <div class="break"></div>
          <HorizontalSize /> 
      </div>
    </>
  );
}

export default App;

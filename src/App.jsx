import React from "react";
import { useState, useRef } from "react";
import { useDimensions } from "./useDimensions";
import "./App.css";

function App() {
  const [panelSize, setPanelSize] = useState({ width: 300, height: 200 });
  const [sectionNumber, setSectionNumber] = useState(1);
  const [outletSize, setOutletSize] = useState({ width: 20, height: 20 });
  const [outletPosition, setOutletPosition] = useState({ top: 20, left: 20 });
  const [sectionCssWidth, setSectionCssWidth] = useState();
  const [realSectionWidth, setRealSectionWidth] = useState();
  const canvasRef = useRef(null);
  const { width: canvasCssWide, height: canvasCssHeight } =
    useDimensions(canvasRef);

  function sectionNumberChangeHandler(e) {
    let number = e.target.value;
    setSectionNumber(number);
    if (number > 0) {
      setSectionCssWidth(canvasCssWide / number);
      setRealSectionWidth(panelSize.width / number);
    }
  }

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

  function Outlet() {
    const outletCssSize = {
      width: `${canvasCssWide * (outletSize.width / panelSize.width)}px`,
      height: `${canvasCssHeight * (outletSize.height / panelSize.height) - 1}px`,
    };

    const outletCssPosition = {
      top: `${canvasCssHeight * (outletPosition.top / panelSize.height)}px`,
      left: `${canvasCssWide * (outletPosition.left / panelSize.width)}px`,
    };

    return (
      <div
        className="panel-outlet"
        style={{ ...outletCssSize, ...outletCssPosition }}
      ></div>
    );
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
              onChange={(e) => sectionNumberChangeHandler(e)}
              name="section number"
              type="number"
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
      <div className="canvas-wrapper">
        <div className="canvas" ref={canvasRef}>
          <Outlet />
          {Array.from({ length: sectionNumber }, (_, index) => (
            <Panel key={index} index={index} />
          ))}
        </div>
        <div className="right-size-wrapper">
          <div className="vertical-line">
            <div className="vertical-line-text">{panelSize.height}</div>
          </div>
        </div>
        <div className="bottom-size-wrapper">
          <div className="horizontal-line">
            <div className="horizontal-line-text">{panelSize.width}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

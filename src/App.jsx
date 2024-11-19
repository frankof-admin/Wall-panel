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
  const panelWrapperRef = useRef(null);
  const panelRef = useRef(null);
  const { width: panelWrapperCssWide } = useDimensions(panelWrapperRef);
  const { width: panelCssWide } = useDimensions(panelRef);

  function sectionNumberChangeHandler(value) {
    setSectionNumber(value);
    if (sectionNumber > 0) {
      handleSectionSizeChange();
    }
  }

  function handleSectionSizeChange() {
    setSectionCssWidth(panelCssWide / sectionNumber);
    setRealSectionWidth(
      (panelSize.width / sectionNumber).toFixed(2),
    );
  }

  function convertSize(sizeObject) {
    let acc = {}
    if (panelWrapperCssWide == 0) return;
    for (const [key, value] of Object.entries(sizeObject)) {
      acc = {
        ...acc,
        [key]: (value / panelWrapperCssWide) * multiplier,
      }
    }
    return { ...acc };
  }

  useEffect(() => {
    handleSectionSizeChange();
  }, [panelSize, panelCssWide, sectionNumber]);

  function Section() {
    return sectionCssWidth && sectionNumber > 1 ? (
      <div className="section" style={{ width: sectionCssWidth }}>
      </div>
    ) : (
      <></>
    );
  }

  function Panel() {
    const size = convertSize(panelSize);

    return (
      <div className="panel" style={{ ...size }} ref={panelRef} >
        <Outlet />
        {Array.from({ length: sectionNumber }, (_, index) => (
          <Section key={index} />
        ))}
      </div>
    );
  }

  function Outlet() {
    const outletCssSize = convertSize(outletSize);
    const outletCssPosition = convertSize(outletPosition);

    return (
      <div
        className="panel-outlet"
        style={{ ...outletCssSize, ...outletCssPosition }}
      ></div>
    );
  }

  function VerticalSize() {
    const size = convertSize(panelSize);

    return (
      <div
        className="right-size-wrapper"
        style={{ height: size?.height }}
      >
        <div className="vertical-line">
          <div className="vertical-line-text">{panelSize.height}</div>
        </div>
      </div>
    );
  }

  function HorizontalSize() {
    const size = convertSize(panelSize);
    const hasInnerLine = (sectionCssWidth && sectionNumber > 1) ? 'has-inner-line' : '';
    const classes = `bottom-size-wrapper ${hasInnerLine}`;
    return (
      <>
      <div
        className={classes}
        style={{
          width: size?.width,
        }}
      >
        { (hasInnerLine) &&
        <div className="horizontal-line-inner" style={{ width: sectionCssWidth }}>
          <div className="horizontal-line-text">{realSectionWidth}</div>
        </div> }
        <div className="horizontal-line">
          <div className="horizontal-line-text">{panelSize.width}</div>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-column-wrapper">
          <div className="menu-input-wrapper">
            <label htmlFor={1}>Ширина панелі (мм):</label>
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
            <label htmlFor={2}>Висота напелі (мм):</label>
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
          <div className="menu-input-wrapper">
            <label htmlFor={3}>Кількість секцій:</label>
            <input
              id={3}
              value={sectionNumber}
              onChange={(e) => sectionNumberChangeHandler(e?.target.value)}
              name="section number"
              type="number"
              min="1"
              max="15"
            />
          </div>
        </div>
        <div className="menu-column-wrapper">
          <div className="menu-input-wrapper">
            <label htmlFor={4}>Ширина вирізу (мм):</label>
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
          <div className="menu-input-wrapper">
            <label htmlFor={5}>Висота вирізу (мм):</label>
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
            <label htmlFor={6}>Відступ по горизонталі (мм):</label>
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
          <div className="menu-input-wrapper">
            <label htmlFor={7}>Відступ по вертикалі (мм):</label>
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
      <div className="panel-wrapper" ref={panelWrapperRef}>
        <Panel />
        <VerticalSize />
        <div className="break"></div>
        <HorizontalSize />
      </div>
    </>
  );
}

export default App;

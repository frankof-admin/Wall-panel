import Outlet from "./Outlet";
import Section from "./Section";

export default function Panel({ panelCssSize, sectionCssWidth, sectionNumber, outletSize, outletPosition, panelWrapperCssWide }) {
  return (
    <div className="panel" style={{ ...panelCssSize }} >
      <Outlet
        outletSize={outletSize}
        outletPosition={outletPosition}
        panelWrapperCssWide={panelWrapperCssWide} 
      />
      {Array.from({ length: sectionNumber }, (_, index) => (
        <Section key={index} sectionCssWidth={sectionCssWidth} sectionNumber={sectionNumber}/>
      ))}
    </div>
  );
}
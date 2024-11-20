import React from "react";
import Outlet from "./Outlet";
import Section from "./Section";

export default function Panel({
  panelCssSize,
  sectionNumber
}) {
  return (
    <div className="panel" style={{ ...panelCssSize }}>
      <Outlet />
      {Array.from({ length: sectionNumber }, (_, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}

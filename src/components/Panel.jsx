import React from "react";
import { useAtomValue } from "jotai";
import { panelCssSizeAtom, sectionNumberAtom } from "./../atoms";
import Outlet from "./Outlet";
import Section from "./Section";

export default function Panel() {
  const panelCssSize = useAtomValue(panelCssSizeAtom);
  const { number } = useAtomValue(sectionNumberAtom);

  return (
    <div className="panel" style={{ ...panelCssSize }}>
      <Outlet />
      {Array.from({ length: number }, (_, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}

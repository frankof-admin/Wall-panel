import React from "react";
import { useAtomValue } from "jotai";
import { panelCssSizeAtom, panelSizeAtom } from "./../atoms";

export default function VerticalSize() {
  const { height: panelCssHeight } = useAtomValue(panelCssSizeAtom);
  const { height: panelRealHeight } = useAtomValue(panelSizeAtom);

  if (!panelCssHeight) return null;

  return (
    <div
      className="vertical-size-wrapper"
      style={{
        height: panelCssHeight-1
      }}
    >
      <div
        className="vertical-dimension-line"
        style={{
          height: panelCssHeight-1
        }}
      >
        <div className="dimension-tick top" />
        <div className="dimension-tick bottom" />
        <div className="dimension-arrow top" />
        <div className="dimension-arrow bottom" />
        <div className="dimension-text vertical">{panelRealHeight}</div>
      </div>
    </div>
  );
}
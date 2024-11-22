import React from "react";
import { useAtomValue } from "jotai";
import { panelCssSizeAtom, panelSizeAtom } from "./../atoms";
export default function VerticalSize() {
  const { height: heightCss } = useAtomValue(panelCssSizeAtom);
  const { height: panelHeight } = useAtomValue(panelSizeAtom);

  return (
    <div className="right-size-wrapper" style={{ height: heightCss }}>
      <div className="vertical-line">
        <div className="vertical-line-text">{panelHeight}</div>
      </div>
    </div>
  );
}

import React from "react";
import { useAtomValue } from "jotai";
import {
  panelSizeAtom,
  panelCssSizeAtom,
  sectionCssWidthAtom,
  sectionRealWidthAtom,
  sectionNumberAtom,
} from "./../atoms";

export default function HorizontalSize() {
  const { width: panelRealWidth } = useAtomValue(panelSizeAtom);
  const { width: panelCssWidth } = useAtomValue(panelCssSizeAtom);
  const sectionCssWidth = useAtomValue(sectionCssWidthAtom);
  const sectionRealWidth = useAtomValue(sectionRealWidthAtom);
  const { number } = useAtomValue(sectionNumberAtom);

  const isInnerDimensionPresent = sectionCssWidth && number > 1 ? "inner-dimension-present" : "";
  const classes = `dimension-line dimension-line-outer ${isInnerDimensionPresent}`;

  return (
    <div
      className="horizontal-size-wrapper"
      style={{
        left: 0,
        width: panelCssWidth,
      }}
    >
      {isInnerDimensionPresent && (
        <div
          className="dimension-line dimension-line-inner"
          style={{ width: sectionCssWidth+2}}
        >
          <div className="dimension-tick right" />
          <div className="dimension-arrow left" />
          <div className="dimension-arrow right" />
          <div className="dimension-text inner">{sectionRealWidth}</div>
        </div>
      )}

      <div
        className={classes}
        style={{
          width: panelCssWidth-1,
        }}
      >
        <div className="dimension-tick left" />
        <div className="dimension-tick right" />
        <div className="dimension-arrow left" />
        <div className="dimension-arrow right" />
        <div className="dimension-text outer">{panelRealWidth}</div>
      </div>
    </div>
  );
}
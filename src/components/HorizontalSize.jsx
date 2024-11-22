import React from "react";
import { useAtomValue } from 'jotai'
import { panelSizeAtom, panelCssSizeAtom, sectionCssWidthAtom, sectionRealWidthAtom, sectionNumberAtom } from './../atoms'

export default function HorizontalSize() {
  const { width: panelRealWidth } = useAtomValue(panelSizeAtom);
  const { width: panelCssWidth } = useAtomValue(panelCssSizeAtom);
  const sectionCssWidth = useAtomValue(sectionCssWidthAtom);
  const sectionRealWidth = useAtomValue(sectionRealWidthAtom);
  const { number } = useAtomValue(sectionNumberAtom);

  const hasInnerLine =
    sectionCssWidth && number > 1 ? "has-inner-line" : "";
  const classes = `bottom-size-wrapper ${hasInnerLine}`;

  return (
    <>
      <div
        className={classes}
        style={{
          width: panelCssWidth,
        }}
      >
        {hasInnerLine && (
          <div
            className="horizontal-line-inner"
            style={{ width: sectionCssWidth }}
          >
            <div className="horizontal-line-text">{sectionRealWidth}</div>
          </div>
        )}
        <div className="horizontal-line">
          <div className="horizontal-line-text">{panelRealWidth}</div>
        </div>
      </div>
    </>
  );
}

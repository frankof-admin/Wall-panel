import React from "react";
import { useAtomValue } from "jotai";
import { sectionCssWidthAtom, sectionNumberAtom } from "./../atoms";

export default function Section() {
  const sectionCssWidth = useAtomValue(sectionCssWidthAtom);
  const { number } = useAtomValue(sectionNumberAtom);

  return sectionCssWidth && number > 1 ? (
    <div className="section" style={{ width: sectionCssWidth }}></div>
  ) : (
    <></>
  );
}

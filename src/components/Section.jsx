import React from "react";
import { useAtomValue } from "jotai";
import { sectionCssWidthAtom, sectionNumberAtom } from "./../atoms";

export default function Section() {
  const sectionCssWidth = useAtomValue(sectionCssWidthAtom);
  const { number } = useAtomValue(sectionNumberAtom);

  if (!sectionCssWidth || number <= 1) return null;

  return (
    <>
      {Array.from({ length: number - 1 }, (_, i) => (
        <div
          key={i}
          className="section"
          style={{
            position: "absolute",
            left: sectionCssWidth * (i + 1),
            top: 0,
            height: "100%",
            width: 1,
          }}
        />
      ))}
    </>
  );
}

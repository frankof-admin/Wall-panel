import React from "react";
import { useAtomValue } from "jotai";
import { outletSizeAtom, outletPositionAtom, scaleAtom } from "./../atoms";
import { convertSize } from "./../utils";

export default function Outlet() {
  const scale = useAtomValue(scaleAtom);
  const outletSize = useAtomValue(outletSizeAtom);
  const outletPosition = useAtomValue(outletPositionAtom);

  const outletCssSize = convertSize(outletSize, scale);
  const outletCssPosition = convertSize(outletPosition, scale);

  return (
    <div
      className="panel-outlet"
      style={{
        width: outletCssSize.width,
        height: outletCssSize.height,
        left: outletCssPosition.left,
        top: outletCssPosition.top,
      }}
    />
  );
}

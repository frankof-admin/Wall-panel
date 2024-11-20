import { convertSize } from "./../utils";

export default function Outlet({outletSize, outletPosition, panelWrapperCssWide}) {
  const outletCssSize = convertSize(outletSize,  panelWrapperCssWide);
  const outletCssPosition = convertSize(outletPosition,  panelWrapperCssWide);

  return (
    <div
      className="panel-outlet"
      style={{ ...outletCssSize, ...outletCssPosition }}
    ></div>
  );
}

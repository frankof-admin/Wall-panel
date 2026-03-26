import { useMemo } from "react";

const BASE_SCALE = 0.1;

export function useScale(panelSize, canvasSize) {
  return useMemo(() => {
    if (!panelSize?.width || !panelSize?.height) return 1;
    if (!canvasSize?.width || !canvasSize?.height) return 1;

    const reservedWidth = 80;
    const reservedHeight = 140;

    const rawWidth = panelSize.width * BASE_SCALE;
    const rawHeight = panelSize.height * BASE_SCALE;

    const availableWidth = canvasSize.width - reservedWidth;
    const availableHeight = canvasSize.height - reservedHeight;

    const scaleX = availableWidth / rawWidth;
    const scaleY = availableHeight / rawHeight;

    return Math.min(scaleX, scaleY, 1);
  }, [panelSize, canvasSize]);
}

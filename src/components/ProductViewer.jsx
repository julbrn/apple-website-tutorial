import React from "react";
import useMackBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMackBookStore();
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        <p className="info">
          Macbook Pro {scale} in {color}
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#abd5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#abd5bd" && "active"
              )}
            ></div>
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            ></div>
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-4xl">Render Canvas</p>
      <Canvas id="canvas">
        <Box position={[-1, 1, 0]} scale={10 * scale}></Box>
      </Canvas>
    </section>
  );
};

export default ProductViewer;

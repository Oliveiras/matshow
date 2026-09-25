import { useEffect, useRef, useState } from "react";

export function DrawingBoard({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState("#ef4444");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };
    resize();
    addEventListener("resize", resize);
    return () => removeEventListener("resize", resize);
  }, []);

  function pointerDown(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    canvas.setPointerCapture(event.pointerId);
    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
  }

  function pointerMove(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    const context = canvasRef.current!.getContext("2d")!;
    context.strokeStyle = color;
    context.lineWidth = 5;
    context.lineCap = "round";
    context.lineTo(event.clientX, event.clientY);
    context.stroke();
  }

  function clear() {
    const canvas = canvasRef.current!;
    canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="drawing-layer">
      <canvas
        ref={canvasRef}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={(e) => e.currentTarget.releasePointerCapture(e.pointerId)}
      />
      <div className="drawing-tools">
        {["#ef4444", "#2563eb", "#111827"].map((item) => (
          <button
            key={item}
            aria-label={`Cor ${item}`}
            className="color-dot"
            style={{
              background: item,
              outline: color === item ? "3px solid white" : "none",
            }}
            onClick={() => setColor(item)}
          />
        ))}
        <button onClick={clear}>Limpar</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

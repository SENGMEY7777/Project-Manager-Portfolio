"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max tilt in degrees (default 12) */
  maxTilt?: number;
  /** Spotlight glow radius in px (default 280) */
  glowRadius?: number;
  /** Scale multiplier on hover (default 1.02) */
  hoverScale?: number;
  /** Element tag override */
  as?: React.ElementType;
  children: React.ReactNode;
}

export function TiltCard({
  maxTilt = 12,
  glowRadius = 280,
  hoverScale = 1.02,
  as: Tag = "div",
  className,
  children,
  style,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      // Cancel previous frame to keep only the latest
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const rect = ref.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Normalise to -1 … 1
        const nx = (x / rect.width) * 2 - 1;
        const ny = (y / rect.height) * 2 - 1;

        setTilt({
          rotateX: -ny * maxTilt,
          rotateY: nx * maxTilt,
        });

        setGlow({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
        });
      });
    },
    [maxTilt]
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlow({ x: 50, y: 50 });
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("tilt-card", isHovered && "is-hovered", className)}
      style={
        {
          "--tilt-x": `${tilt.rotateX}deg`,
          "--tilt-y": `${tilt.rotateY}deg`,
          "--glow-x": `${glow.x}%`,
          "--glow-y": `${glow.y}%`,
          "--glow-radius": `${glowRadius}px`,
          "--hover-scale": hoverScale,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Spotlight overlay that follows cursor */}
      <span className="tilt-card__spotlight" aria-hidden />
      {/* Border glow that follows cursor */}
      <span className="tilt-card__border-glow" aria-hidden />
      {children}
    </Tag>
  );
}

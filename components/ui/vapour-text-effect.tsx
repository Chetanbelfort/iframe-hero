'use client';

import React, {
  useRef,
  useEffect,
  useState,
  createElement,
  useMemo,
  useCallback,
  memo,
} from 'react';

/* ---------------------------------- TAG ---------------------------------- */

export enum Tag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  P = 'p',
}

/* -------------------------------- PROPS ---------------------------------- */

type VaporizeTextCycleProps = {
  texts: string[];
  font?: {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number;
  };
  color?: string;
  spread?: number;
  density?: number;
  animation?: {
    vaporizeDuration?: number;
    fadeInDuration?: number;
    waitDuration?: number;
  };
  direction?: 'left-to-right' | 'right-to-left';
  alignment?: 'left' | 'center' | 'right';
  tag?: Tag;
};

type Particle = {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  color: string;
  opacity: number;
  originalAlpha: number;
  velocityX: number;
  velocityY: number;
  angle: number;
  speed: number;
  shouldFadeQuickly?: boolean;
};

type TextBoundaries = {
  left: number;
  right: number;
  width: number;
};

declare global {
  interface HTMLCanvasElement {
    textBoundaries?: TextBoundaries;
  }
}

/* -------------------------- MAIN COMPONENT -------------------------- */

function VaporizeTextCycle({
  texts,
  font = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '56px',
    fontWeight: 600,
  },
  color = 'rgb(0,0,0)',
  spread = 4,
  density = 5,
  animation = {
    vaporizeDuration: 2,
    fadeInDuration: 1,
    waitDuration: 0.6,
  },
  direction = 'left-to-right',
  alignment = 'center',
  tag = Tag.H1,
}: VaporizeTextCycleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrame = useRef<number>();

  const [index, setIndex] = useState(0);
  const [state, setState] = useState<'static' | 'vaporize' | 'fade'>('static');

  const DPR = typeof window !== 'undefined' ? window.devicePixelRatio * 1.5 : 1;

  /* ------------------------ RENDER TEXT ------------------------ */

  const renderText = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = wrapper.getBoundingClientRect();

    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(DPR, DPR);
    ctx.clearRect(0, 0, width, height);

    ctx.font = `${font.fontWeight} ${font.fontSize} ${font.fontFamily}`;
    ctx.fillStyle = color;
    ctx.textAlign = alignment;
    ctx.textBaseline = 'middle';

    const x =
      alignment === 'center' ? width / 2 : alignment === 'left' ? 0 : width;
    const y = height / 2;

    ctx.fillText(texts[index], x, y);

    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    particlesRef.current = [];

    for (let y = 0; y < canvas.height; y += density) {
      for (let x = 0; x < canvas.width; x += density) {
        const i = (y * canvas.width + x) * 4;
        if (image.data[i + 3] > 0) {
          particlesRef.current.push({
            x,
            y,
            originalX: x,
            originalY: y,
            color: `rgba(${image.data[i]},${image.data[i + 1]},${image.data[i + 2]},1)`,
            opacity: 1,
            originalAlpha: 1,
            velocityX: 0,
            velocityY: 0,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * spread,
          });
        }
      }
    }

    ctx.clearRect(0, 0, width, height);
  }, [index, texts, font, color, alignment, DPR, density, spread]);

  /* ---------------------- ANIMATION LOOP ---------------------- */

  useEffect(() => {
    renderText();

    let last = performance.now();

    const animate = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += Math.cos(p.angle) * p.speed * 30 * delta;
        p.y += Math.sin(p.angle) * p.speed * 20 * delta;
        p.opacity -= delta * 0.4;

        if (p.opacity > 0) {
          ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${p.opacity})`);
          ctx.fillRect(p.x / DPR, p.y / DPR, 1, 1);
        }
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, animation.vaporizeDuration * 1000 + animation.waitDuration * 1000);

    return () => {
      cancelAnimationFrame(animationFrame.current!);
      clearTimeout(timer);
    };
  }, [index, texts.length, animation, renderText, DPR]);

  /* --------------------------- RENDER --------------------------- */

  return (
    <div ref={wrapperRef} className="relative w-full h-full pointer-events-none">
      <canvas ref={canvasRef} />
      <SeoText tag={tag} texts={texts} />
    </div>
  );
}

/* ------------------------------ SEO ------------------------------ */

const SeoText = memo(({ tag, texts }: { tag: Tag; texts: string[] }) => {
  return createElement(
    tag,
    {
      style: {
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
      },
    },
    texts.join(' ')
  );
});

/* --------------------------- EXPORTS --------------------------- */

export default VaporizeTextCycle;
export { VaporizeTextCycle };

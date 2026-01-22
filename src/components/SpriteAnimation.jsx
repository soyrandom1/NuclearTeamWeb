import React, { useEffect, useRef, useState } from 'react';

export default function SpriteAnimation({ src, rows = 8, cols = 8, fps = 10 }) {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current) {
        const container = canvasRef.current.parentElement;
        const size = Math.min(container.clientWidth, 500);
        setDimensions({ width: size, height: 300 });
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = src;
    imgRef.current = img;

    let frame = 0;
    const totalFrames = (rows * cols) - 3;
    let frameWidth, frameHeight;
    let animationInterval;
    let timeoutId;

    const drawFrame = () => {
      if (!img.complete) return;
      
      const row = Math.floor(frame / cols);
      const col = frame % cols;
      
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate integer scale factor to maintain sharp pixels
      const scale = Math.max(1, Math.floor(canvas.width / frameWidth));
      const scaledWidth = frameWidth * scale;
      const scaledHeight = frameHeight * scale;
      
      // Center the scaled image
      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;
      
      // Turn off anti-aliasing
      ctx.imageSmoothingEnabled = false;
      
      ctx.drawImage(
        img,
        col * frameWidth,
        row * frameHeight,
        frameWidth,
        frameHeight,
        x,
        y,
        scaledWidth,
        scaledHeight
      );
    };

    const startAnimation = () => {
      setIsAnimating(true);
      animationInterval = setInterval(() => {
        frame = (frame + 1) % totalFrames;
        drawFrame();
        
        if (frame === totalFrames - 1) {
          clearInterval(animationInterval);
          setIsAnimating(false);
          timeoutId = setTimeout(() => {
            startAnimation();
          }, 5000);
        }
      }, 1000 / fps);
    };

    img.onload = () => {
      frameWidth = img.width / cols;
      frameHeight = img.height / rows;
      
      // Set canvas size while maintaining aspect ratio
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      
      // Draw first frame immediately
      drawFrame();
      
      // Start animation after 5 seconds
      timeoutId = setTimeout(() => {
        startAnimation();
      }, 5000);
    };

    return () => {
      clearInterval(animationInterval);
      clearTimeout(timeoutId);
    };
  }, [src, rows, cols, fps, dimensions]);

  return <canvas 
    ref={canvasRef} 
    className="sprite-animation" 
    style={{ width: dimensions.width, height: dimensions.height }}
  />;
}

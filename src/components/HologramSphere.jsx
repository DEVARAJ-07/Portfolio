import { useRef, useEffect, useState } from 'react';

export default function HologramSphere({ onNavigate, showInner, setShowInner }) {
  const canvasRef = useRef(null);
  const [activeQuadrant, setActiveQuadrant] = useState(null);
  // To move labels toward cursor
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const parentWidth = canvas.parentElement.clientWidth;
      const parentHeight = canvas.parentElement.clientHeight || 500;
      
      canvas.width = parentWidth * dpr;
      canvas.height = parentHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${parentWidth}px`;
      canvas.style.height = `${parentHeight}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = 1200;
    const particles = [];
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      
      const innerRadiusScale = 0.95 + Math.random() * 0.05;
      
      particles.push({ 
        baseX: x, baseY: y, baseZ: z, 
        innerX: x * innerRadiusScale, innerY: y * innerRadiusScale, innerZ: z * innerRadiusScale,
        currentX: x, currentY: y, currentZ: z,
        vx: 0, vy: 0, vz: 0,
        size: Math.random() * 1.2 + 0.5
      });
    }

    let autoAngleX = 0;
    let autoAngleY = 0;
    let time = 0;
    
    // Mouse hover variables (outer sphere)
    let mouseX = -1000;
    let mouseY = -1000;
    
    // Drag rotation & navigation variables (inner sphere)
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragAngleX = 0;
    let dragAngleY = 0;
    let targetDragAngleX = 0;
    let targetDragAngleY = 0;
    let totalDx = 0;
    let totalDy = 0;

    const onDoubleClick = (e) => {
      e.preventDefault();
      const newState = !showInner;
      setShowInner(newState);
      
      if (newState) {
         targetDragAngleX = autoAngleX;
         targetDragAngleY = autoAngleY;
         dragAngleX = autoAngleX;
         dragAngleY = autoAngleY;
      }
    };
    
    const onPointerDown = (e) => {
       if (!showInner) return;
       isDragging = true;
       const clientX = e.clientX || (e.touches && e.touches[0].clientX);
       const clientY = e.clientY || (e.touches && e.touches[0].clientY);
       dragStartX = clientX;
       dragStartY = clientY;
       totalDx = 0;
       totalDy = 0;
       canvas.style.cursor = 'grabbing';
    };
    
    const onPointerMove = (e) => {
       const clientX = e.clientX || (e.touches && e.touches[0].clientX);
       const clientY = e.clientY || (e.touches && e.touches[0].clientY);
       
       if (!showInner) {
          // Hover logic for outer sphere
          const rect = canvas.getBoundingClientRect();
          mouseX = clientX - rect.left;
          mouseY = clientY - rect.top;
          return;
       }
       
       if (!isDragging) return;
       
       const dx = clientX - dragStartX;
       const dy = clientY - dragStartY;
       
       totalDx += dx;
       totalDy += dy;
       
       // Move labels slightly based on drag
       setDragOffset({ x: totalDx * 0.1, y: totalDy * 0.1 });
       
       targetDragAngleY += dx * 0.005;
       targetDragAngleX += dy * 0.005;
       
       dragStartX = clientX;
       dragStartY = clientY;
       
       const threshold = 120;
       let quad = null;
       if (totalDx > threshold && totalDy < -threshold) quad = 1;      // Top Right
       else if (totalDx < -threshold && totalDy < -threshold) quad = 2; // Top Left
       else if (totalDx < -threshold && totalDy > threshold) quad = 3;  // Bottom Left
       else if (totalDx > threshold && totalDy > threshold) quad = 4;   // Bottom Right
       
       setActiveQuadrant(quad);
    };
    
    const onPointerLeave = () => {
       mouseX = -1000;
       mouseY = -1000;
    };
    
    const onPointerUp = () => {
       isDragging = false;
       canvas.style.cursor = showInner ? 'grab' : 'default';
       setDragOffset({ x: 0, y: 0 });
       
       const threshold = 120;
       let quad = null;
       if (totalDx > threshold && totalDy < -threshold) quad = 1;
       else if (totalDx < -threshold && totalDy < -threshold) quad = 2;
       else if (totalDx < -threshold && totalDy > threshold) quad = 3;
       else if (totalDx > threshold && totalDy > threshold) quad = 4;
       
       setActiveQuadrant(null);
       if (quad && onNavigate && showInner) {
           onNavigate(quad);
       }
    };

    canvas.addEventListener('dblclick', onDoubleClick);
    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    canvas.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('mouseup', onPointerUp);
    canvas.addEventListener('touchstart', onPointerDown, {passive: true});
    window.addEventListener('touchmove', onPointerMove, {passive: true});
    window.addEventListener('touchend', onPointerUp);

    let animationFrameId;

    const render = () => {
      time += 0.02;
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight || 500;
      
      ctx.clearRect(0, 0, width, height);
      
      let finalAngleX = 0;
      let finalAngleY = 0;
      
      if (showInner) {
         dragAngleX += (targetDragAngleX - dragAngleX) * 0.1;
         dragAngleY += (targetDragAngleY - dragAngleY) * 0.1;
         finalAngleX = dragAngleX;
         finalAngleY = dragAngleY;
         
         autoAngleX = dragAngleX;
         autoAngleY = dragAngleY;
      } else {
         autoAngleY += 0.003;
         autoAngleX += 0.001;
         finalAngleX = autoAngleX;
         finalAngleY = autoAngleY;
      }
      
      const cosX = Math.cos(finalAngleX);
      const sinX = Math.sin(finalAngleX);
      const cosY = Math.cos(finalAngleY);
      const sinY = Math.sin(finalAngleY);

      // Breathing effect: base radius 0.45, breath adds a small sine wave if inner is true
      const breathScale = showInner ? 1 + Math.sin(time) * 0.04 : 1;
      const sphereRadius = Math.min(width, height) * 0.45 * breathScale;
      
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < count; i++) {
        let p = particles[i];
        
        const targetX = showInner ? p.innerX : p.baseX;
        const targetY = showInner ? p.innerY : p.baseY;
        const targetZ = showInner ? p.innerZ : p.baseZ;
        
        const stiffness = 0.08;
        p.vx += (targetX - p.currentX) * stiffness;
        p.vy += (targetY - p.currentY) * stiffness;
        p.vz += (targetZ - p.currentZ) * stiffness;
        
        const damping = 0.85;
        p.vx *= damping;
        p.vy *= damping;
        p.vz *= damping;
        
        p.currentX += p.vx;
        p.currentY += p.vy;
        p.currentZ += p.vz;

        let rotY_X = p.currentX * cosY - p.currentZ * sinY;
        let rotY_Z = p.currentZ * cosY + p.currentX * sinY;
        
        let rotX_Y = p.currentY * cosX - rotY_Z * sinX;
        let rotX_Z = rotY_Z * cosX + p.currentY * sinX;
        
        let screenX = rotY_X * sphereRadius;
        let screenY = rotX_Y * sphereRadius;
        
        const zOffset = rotX_Z * sphereRadius;
        const perspective = 800;
        const scale = perspective / (perspective - zOffset); 
        
        const projX = screenX * scale + centerX;
        const projY = screenY * scale + centerY;
        
        // Movable animation (outer sphere hover interaction)
        if (!showInner) {
            const dx = projX - mouseX;
            const dy = projY - mouseY;
            const distSq = dx * dx + dy * dy;
            const interactionRadius = 120;
            
            if (distSq < interactionRadius * interactionRadius && rotX_Z > -0.2) {
               const dist = Math.sqrt(distSq) || 1;
               const force = (interactionRadius - dist) / interactionRadius;
               // Move particles slightly
               p.vx += (dx / dist) * force * 0.08;
               p.vy += (dy / dist) * force * 0.08;
            }
        }
        
        const alpha = showInner 
           ? Math.max(0.2, Math.min(1, (rotX_Z + 1) / 2 + 0.5))
           : Math.max(0.1, Math.min(1, (rotX_Z + 1) / 2 + 0.2));

        ctx.beginPath();
        ctx.arc(projX, projY, p.size * scale, 0, 6.283185307179586);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('dblclick', onDoubleClick);
      canvas.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      canvas.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('mouseup', onPointerUp);
      canvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onNavigate, showInner, setShowInner]);

  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center relative select-none">
      <div className={`w-full h-full absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${showInner ? 'scale-105 rotate-3' : 'scale-100 rotate-0'}`}>
         <canvas 
            ref={canvasRef} 
            className={`block w-full h-full ${showInner ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'} touch-none relative z-10`} 
            style={{touchAction: 'none'}} 
         />
      </div>
      
      {/* Quadrant Indicators Overlay */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-700 z-20 overflow-hidden ${showInner ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
         
         {/* Q2: Top Left - Projects and Builds */}
         <div 
            onClick={() => showInner && onNavigate && onNavigate(2)}
            className={`absolute top-[15%] left-[5%] md:left-[15%] transition-all duration-500 ease-out transform-gpu pointer-events-auto cursor-pointer
               ${activeQuadrant === 2 ? 'scale-110 opacity-100 translate-x-4 translate-y-4 z-30 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]' : 
                 activeQuadrant !== null ? 'opacity-0 blur-md scale-90' : 'opacity-70 hover:opacity-100 scale-100'}`}
         >
            <div className="px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-black/40 backdrop-blur-xl text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center sm:items-start gap-2 max-w-[140px] sm:max-w-[200px]">
               <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${activeQuadrant === 2 ? 'bg-white shadow-[0_0_15px_2px_white]' : 'bg-gray-400'}`} />
               <p className="font-heading tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold text-center sm:text-left leading-relaxed">
                  Projects and Builds
               </p>
            </div>
         </div>

         {/* Q1: Top Right - Education and Certifications */}
         <div 
            onClick={() => showInner && onNavigate && onNavigate(1)}
            className={`absolute top-[15%] right-[5%] md:right-[15%] transition-all duration-500 ease-out transform-gpu pointer-events-auto cursor-pointer
               ${activeQuadrant === 1 ? 'scale-110 opacity-100 -translate-x-4 translate-y-4 z-30 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]' : 
                 activeQuadrant !== null ? 'opacity-0 blur-md scale-90' : 'opacity-70 hover:opacity-100 scale-100'}`}
         >
            <div className="px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-black/40 backdrop-blur-xl text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center sm:items-end gap-2 max-w-[140px] sm:max-w-[200px]">
               <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${activeQuadrant === 1 ? 'bg-white shadow-[0_0_15px_2px_white]' : 'bg-gray-400'}`} />
               <p className="font-heading tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold text-center sm:text-right leading-relaxed">
                  Education & Certifications
               </p>
            </div>
         </div>

         {/* Q3: Bottom Left - Contact Me */}
         <div 
            onClick={() => showInner && onNavigate && onNavigate(3)}
            className={`absolute bottom-[15%] left-[5%] md:left-[15%] transition-all duration-500 ease-out transform-gpu pointer-events-auto cursor-pointer
               ${activeQuadrant === 3 ? 'scale-110 opacity-100 translate-x-4 -translate-y-4 z-30 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]' : 
                 activeQuadrant !== null ? 'opacity-0 blur-md scale-90' : 'opacity-70 hover:opacity-100 scale-100'}`}
         >
            <div className="px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-black/40 backdrop-blur-xl text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center sm:items-start gap-2 max-w-[140px] sm:max-w-[200px]">
               <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${activeQuadrant === 3 ? 'bg-white shadow-[0_0_15px_2px_white]' : 'bg-gray-400'}`} />
               <p className="font-heading tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold text-center sm:text-left leading-relaxed">
                  Contact Me
               </p>
            </div>
         </div>

         {/* Q4: Bottom Right - Connect With Me */}
         <div 
            onClick={() => showInner && onNavigate && onNavigate(4)}
            className={`absolute bottom-[15%] right-[5%] md:right-[15%] transition-all duration-500 ease-out transform-gpu pointer-events-auto cursor-pointer
               ${activeQuadrant === 4 ? 'scale-110 opacity-100 -translate-x-4 -translate-y-4 z-30 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]' : 
                 activeQuadrant !== null ? 'opacity-0 blur-md scale-90' : 'opacity-70 hover:opacity-100 scale-100'}`}
         >
            <div className="px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-black/40 backdrop-blur-xl text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center sm:items-end gap-2 max-w-[140px] sm:max-w-[200px]">
               <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${activeQuadrant === 4 ? 'bg-white shadow-[0_0_15px_2px_white]' : 'bg-gray-400'}`} />
               <p className="font-heading tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold text-center sm:text-right leading-relaxed">
                  Connect With Me
               </p>
            </div>
         </div>

         {/* Center helper text */}
         <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${activeQuadrant !== null ? 'opacity-0' : 'opacity-100'}`}>
             <div className="text-white/40 text-[10px] sm:text-xs text-center tracking-widest uppercase font-sans animate-pulse px-4 py-2 rounded-full bg-black/20 backdrop-blur-md">
                Drag or Tap Corners
             </div>
         </div>
      </div>
      
      {/* Double Tap Instruction */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none text-center tracking-[0.2em] uppercase font-sans h-6 w-full max-w-sm">
        <div className={`absolute inset-0 transition-all duration-700 text-gray-500 text-sm flex items-center justify-center whitespace-nowrap ${showInner ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          Double tap to interact
        </div>
        <div className={`absolute inset-0 transition-all duration-700 text-white/50 text-sm flex items-center justify-center whitespace-nowrap ${showInner ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Double tap to return
        </div>
      </div>
    </div>
  );
}

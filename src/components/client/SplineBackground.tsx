export function SplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden hidden sm:block">
      <iframe
        src="https://my.spline.design/twistcopy-CPActtgUfoQoOToZfH4Pt18Q"
        frameBorder="0"
        width="100%"
        height="100%"
        id="aura-spline"
        title="Spline 3D Background"
        style={{ border: 'none', pointerEvents: 'none' }}
        loading="lazy"
      />
    </div>
  );
}


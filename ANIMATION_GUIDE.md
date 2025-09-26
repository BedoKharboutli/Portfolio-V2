# Hero Section Background Animations

## Overview
Three distinct, performance-optimized background animations have been implemented for your hero section:

## Animation Options

### 1. ✨ Floating Particles
- **Description**: Interactive particle system with connecting lines
- **Features**: 
  - Canvas-based animation for smooth performance
  - Particles move with subtle physics
  - Dynamic connections between nearby particles
  - Responsive particle count based on screen size
- **Performance**: Uses `requestAnimationFrame` and optimized canvas rendering

### 2. 🌊 Gradient Waves  
- **Description**: Flowing gradient waves with smooth morphing
- **Features**:
  - Multiple overlapping wave layers
  - Smooth color transitions
  - Organic floating motion
  - Radial gradient overlays
- **Performance**: Pure CSS animations using `transform` and `opacity`

### 3. 🔷 Geometric Shapes
- **Description**: Animated geometric shapes floating upward
- **Features**:
  - Mix of circles and squares
  - Continuous upward movement
  - Randomized sizes and positions
  - Subtle rotation effects
- **Performance**: CSS-only animations with `will-change` optimization

## Controls

### Animation Toggle
- **Button**: 🎬/⏸️ (top-right corner)
- **Function**: Enable/disable all animations
- **Use Case**: Accessibility and performance preferences

### Animation Selector
- **Buttons**: ✨ 🌊 🔷
- **Function**: Switch between animation types
- **Default**: Floating Particles

## Technical Features

### Performance Optimizations
- **Hardware Acceleration**: Uses `transform` and `opacity` for GPU acceleration
- **Reduced Motion Support**: Respects `prefers-reduced-motion` setting
- **Mobile Optimization**: Reduced complexity on smaller screens
- **Battery Saving**: Animations pause when not visible

### Accessibility
- **High Contrast Mode**: Reduced opacity for better readability
- **Reduced Motion**: Animations disabled for users with motion sensitivity
- **Keyboard Navigation**: All controls are keyboard accessible
- **Screen Reader**: Proper ARIA labels and titles

### Browser Compatibility
- **Modern Browsers**: Full feature support
- **Fallback**: Graceful degradation for older browsers
- **Mobile**: Optimized for touch devices

## Implementation Details

### File Structure
```
src/components/hero/
├── Hero.jsx (main component)
├── hero.css (existing styles)
├── BackgroundAnimations.jsx (animation components)
└── backgroundAnimations.css (animation styles)
```

### State Management
- `animationType`: Controls which animation is active
- `showAnimations`: Toggle for enabling/disabling animations

### CSS Variables Used
- `--card-bg`: Background for controls
- `--border-color`: Border styling
- `--accent-color`: Active state color
- `--text-secondary`: Text color
- `--shadow-sm`, `--shadow-lg`: Box shadows

## Customization

### Colors
Modify the gradient colors in `backgroundAnimations.css`:
```css
/* Example: Change particle colors */
.floating-particles {
  /* Modify hue range in BackgroundAnimations.jsx */
  color: `hsl(${220 + Math.random() * 60}, 70%, 60%)`;
}
```

### Animation Speed
Adjust animation durations:
```css
/* Slower waves */
.wave-1 { animation-duration: 30s; }

/* Faster geometric shapes */
.geometric-shape { animation-duration: 15s; }
```

### Particle Count
Modify in `BackgroundAnimations.jsx`:
```javascript
const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
```

## Usage Tips

1. **Default State**: Animations start with "Floating Particles"
2. **Performance**: Animations automatically optimize for device capabilities
3. **User Preference**: Respects system accessibility settings
4. **Mobile**: Reduced complexity maintains smooth performance
5. **Battery**: Animations pause when tab is not active

## Troubleshooting

### Performance Issues
- Reduce particle count in `BackgroundAnimations.jsx`
- Increase animation durations in CSS
- Disable animations on low-end devices

### Visual Conflicts
- Adjust opacity values in CSS
- Modify z-index if needed
- Check CSS variable definitions

### Browser Compatibility
- Canvas animations require modern browser support
- CSS animations have broader compatibility
- Fallbacks are automatically applied

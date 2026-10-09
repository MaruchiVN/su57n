import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          poster?: string;
          loading?: 'auto' | 'lazy' | 'eager';
          reveal?: 'auto' | 'interaction' | 'manual';
          'auto-rotate'?: boolean | string;
          'auto-rotate-delay'?: number | string;
          'rotation-per-second'?: string;
          'camera-controls'?: boolean | string;
          'camera-orbit'?: string;
          'field-of-view'?: string;
          'shadow-intensity'?: string | number;
          'shadow-softness'?: string | number;
          exposure?: string | number;
          'environment-image'?: string;
          'skybox-image'?: string;
          ar?: boolean | string;
          'ar-modes'?: string;
          'touch-action'?: string;
          'interaction-prompt'?: string;
          style?: React.CSSProperties;
          onPointerDown?: React.PointerEventHandler<HTMLElement>;
        },
        HTMLElement
      >;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          poster?: string;
          loading?: 'auto' | 'lazy' | 'eager';
          reveal?: 'auto' | 'interaction' | 'manual';
          'auto-rotate'?: boolean | string;
          'auto-rotate-delay'?: number | string;
          'rotation-per-second'?: string;
          'camera-controls'?: boolean | string;
          'camera-orbit'?: string;
          'field-of-view'?: string;
          'shadow-intensity'?: string | number;
          'shadow-softness'?: string | number;
          exposure?: string | number;
          'environment-image'?: string;
          'skybox-image'?: string;
          ar?: boolean | string;
          'ar-modes'?: string;
          'touch-action'?: string;
          'interaction-prompt'?: string;
          style?: React.CSSProperties;
          onPointerDown?: React.PointerEventHandler<HTMLElement>;
        },
        HTMLElement
      >;
    }
  }
}

declare module 'react-type-animation' {
    import { FC } from 'react';
  
    interface TypeAnimationProps {
      sequence: (string | number | (() => void))[];
      wrapper?: string;
      cursor?: boolean;
      repeat?: number | boolean;
      style?: React.CSSProperties;
      ref?: any;  // Add optional ref type
    }
  
    const TypeAnimation: FC<TypeAnimationProps>;
    export { TypeAnimation };
  }
  
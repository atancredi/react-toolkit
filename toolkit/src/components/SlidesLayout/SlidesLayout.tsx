import { CSSProperties, PropsWithChildren } from "react";
import './SlidesLayout.css'


export interface SlidesLayoutProps extends PropsWithChildren {
  className?: string
  scrollSnap?: boolean
}

const SlidesLayout = ({ children, className = "", scrollSnap = false }: SlidesLayoutProps) => {

  return (
    <div className={"slides-container " + (scrollSnap == true ? "scroll-snap " : "") + className}>
      {children}
    </div>
  );
}

export interface SlideProps extends PropsWithChildren {
  style?: CSSProperties
}

SlidesLayout.Slide = ({ children, style }: Readonly<SlideProps>) => {

  return (
    <div className="slide" style={style}>
      {children}
    </div>
  );
}

export default SlidesLayout;


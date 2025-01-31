import './BackgroundRouter.css';

import { useLocation } from "react-router-dom";

const BackgroundRouter = ({ children }: {children: React.ReactNode}) => {
  const currentRoute = useLocation();

  const getBackground = () => {
    switch (currentRoute.pathname) {
      case '/': return 'homeBackground';
      default: return 'defaultBackground';
    }
  };

  return (
    <div className={getBackground()}>
      {children}
    </div>
  )
}

export default BackgroundRouter;
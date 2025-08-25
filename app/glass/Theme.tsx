import { FC, PropsWithChildren } from 'react';

export interface ThemeProps {
  theme: 'light' | 'dark';
}

const Theme: FC<PropsWithChildren<ThemeProps>> = ({ children }) => {
  return <div className="Theme">{children}</div>;
};

Theme.displayName = 'Theme';

export default Theme;
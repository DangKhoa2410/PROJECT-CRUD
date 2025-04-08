import { IconType } from 'react-icons';

export interface NavProps {
  icon: IconType; 
  label: string; 
  path: string;   
}

export interface NavSide {
  navItems: NavProps[];
}

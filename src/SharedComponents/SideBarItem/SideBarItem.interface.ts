import { SIDEBAR_ITEMS } from '../../Constants/Enum';

export interface SideBarItemProps {
  title: string;
  iconAltName: string;
  iconSrc: string;
  activeItem: SIDEBAR_ITEMS;
}

import { SIDEBAR_ITEMS } from '../../Constants/Enum';

export interface SideBarItemProps {
  title: string;
  iconAltName: SIDEBAR_ITEMS;
  iconSrc: string;
  activeItem: SIDEBAR_ITEMS;
  sideBarItemChanged: (action: SIDEBAR_ITEMS) => void;
}

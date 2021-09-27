import { SIDEBAR_ITEMS } from '../../Constants/Enum';
import { PAGE_ROUTES } from '../../Constants/PageRoute';

export interface SideBarItemProps {
  title: string;
  iconAltName: SIDEBAR_ITEMS;
  iconSrc: string;
  activeItem: SIDEBAR_ITEMS;
  sideBarItemChanged: (action: SIDEBAR_ITEMS) => void;
  pageRoute: PAGE_ROUTES;
}

import { SIDEBAR_ITEMS } from '../../Constants/Enum';

export interface SideBarState {
  activeItem: SIDEBAR_ITEMS;
}

export const INITIAL_STATE_SIDEBAR: SideBarState = {
  activeItem: SIDEBAR_ITEMS.HOME,
};

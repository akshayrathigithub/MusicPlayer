import { SIDEBAR_ITEMS } from '../../Constants/Enum';
import ic_home from '../../Assets/Icons/ic_home.svg';
import ic_search from '../../Assets/Icons/ic_search.svg';
import ic_radio from '../../Assets/Icons/ic_radio.svg';
import ic_favorite from '../../Assets/Icons/ic_favorite.svg';
import ic_album from '../../Assets/Icons/ic_album.svg';
import ic_artist from '../../Assets/Icons/ic_artist.svg';
import ic_recent from '../../Assets/Icons/ic_recent.svg';
import { PAGE_ROUTES } from '../../Constants/PageRoute';

export interface SideBarState {
  activeItem: SIDEBAR_ITEMS;
}

export const INITIAL_STATE_SIDEBAR: SideBarState = {
  activeItem: SIDEBAR_ITEMS.HOME,
};

export interface SideBarItemType {
  altName: SIDEBAR_ITEMS;
  src: string;
  text: string;
  route: PAGE_ROUTES;
}

export const TOP_SIDEBAR_ITEMS: SideBarItemType[] = [
  {
    altName: SIDEBAR_ITEMS.HOME,
    src: ic_home,
    text: 'HOME',
    route: PAGE_ROUTES.HOME,
  },
  {
    altName: SIDEBAR_ITEMS.BROWSE,
    src: ic_search,
    text: 'BROWSE',
    route: PAGE_ROUTES.BROWSE,
  },
  {
    altName: SIDEBAR_ITEMS.RADIO,
    src: ic_radio,
    text: 'RADIO',
    route: PAGE_ROUTES.RADIO,
  },
];

export const MID_SIDEBAR_ITEMS: SideBarItemType[] = [
  {
    altName: SIDEBAR_ITEMS.RECENTLY_PLAYED,
    src: ic_recent,
    text: 'RECENTLY PLAYED',
    route: PAGE_ROUTES.HOME,
  },
  {
    altName: SIDEBAR_ITEMS.FAVORITE_SONG,
    src: ic_favorite,
    text: 'FAVORITE SONGS',
    route: PAGE_ROUTES.HOME,
  },
  {
    altName: SIDEBAR_ITEMS.ARTISTS,
    src: ic_artist,
    text: 'ARTISTS',
    route: PAGE_ROUTES.HOME,
  },
  {
    altName: SIDEBAR_ITEMS.ALBUMS,
    src: ic_album,
    text: 'ALBUMS',
    route: PAGE_ROUTES.HOME,
  },
];

export const BOT_SIDEBAR_ITEMS: SideBarItemType[] = [
  {
    altName: SIDEBAR_ITEMS.HINDI_TOP,
    src: ic_home,
    text: 'TOP HINDI',
    route: PAGE_ROUTES.HOME,
  },
  {
    altName: SIDEBAR_ITEMS.ROMANTIC_TOP,
    src: ic_search,
    text: 'TOP ROMANTIC',
    route: PAGE_ROUTES.HOME,
  },
  {
    altName: SIDEBAR_ITEMS.ENGLISH_TOP,
    src: ic_radio,
    text: 'TOP ENGLISH',
    route: PAGE_ROUTES.HOME,
  },
];

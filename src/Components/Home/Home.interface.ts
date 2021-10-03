export interface ContentRefType {
  activeIndex: number;
  elementList: HTMLDivElement[];
}

export interface ContentState {
  list: string[];
  totalLength: number;
  leafList: {
    zIndex: string;
    img: string;
    translateValue: string;
    width: string;
    height: string;
  }[];
  featuredList: {
    activeIndex: number;
    songsList: string[];
  };
}

export interface ElementStyles {
  transform: string;
  height: string;
  width: string;
  zIndex: string;
}

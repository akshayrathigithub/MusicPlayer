export interface ContentRefType {
  activeIndex: number;
  elementList: HTMLDivElement[];
}

export interface ContentState {
  list: string[];
  totalLength: number;
  leafList: {
    zIndex: string;
    bgColor: string;
    translateValue: string;
    width: string;
    height: string;
  }[];
}

export interface ElementStyles {
  transform: string;
  height: string;
  width: string;
  zIndex: string;
}

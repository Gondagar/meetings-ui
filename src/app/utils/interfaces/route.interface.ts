export interface IMuiNavigationItem {
  path: string;
  title?: string;
  icon?: string;
  children?: IMuiRout;
}

export interface IMuiRout {
  [name: string]: IMuiNavigationItem;
}

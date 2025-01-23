export interface UserType {
  name: string;
  email: string;
  role: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserContextTypes {
  user: User | null;
  register: (name: string, email: string, password: string, role: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkUser: () => Promise<void>
}

export interface TextInputCompTypes {
  disabled?: boolean;
  id?: string;
  title?: string;
  isLabel?: boolean;
  label?: string;
  labelClass?: string;
  type: string;
  value: string;
  placeholder: string;
  class?: string;
  isToggle?: boolean;
  onEnter?: () => void;
  onUpdate?: (newValue: string) => void;
}

export interface AlertCompTypes {
  type: string;
  iconSize: number;
  message: string;
}

export interface ButtonCompTypes {
  children: React.ReactNode;
  class?: string;
  isLoading?: boolean;
  onClicked: () => void;
}

export interface FooterLoginCompTypes {
  to: string;
  text: string;
  textBold: string;
}

export interface MainIconCompTypes {
  iconSize: number;
  frameSize: number;
}

export interface SidebarMenuCompTypes {
  icon: React.ReactNode;
  isActive: boolean;
  text: string;
  to?: string;
  onClicked?: () => void;
}

export interface BookCompTypes {
  id: number;
  title: string;
  author: string;
  available: boolean;
  showAvailable?: boolean;
  showBorrower?: boolean;
  borrower?: string;
  startDate?: string;
  dueDate?: string;
  isAdmin?: boolean;
  hideStatus?: boolean;
}

export interface BoxWidgetCompTypes {
  icon: React.ReactNode;
  amount: any;
  title: string;
}
export interface MenuItem {
    title: string;
    icon: JSX.Element;
    gap?: boolean;
    onClick?: () => void;
}

export interface ConfigOptions {
    baseURL: string;
    headers: {
        'Content-Type': string;
        'Authorization': string;
    };
}

export interface NotificationDropdownProps {
    isOpen: boolean;
    toggleDropdown: () => void;
}

export interface FriendsProps {
    onFriendClick: () => void;
}

export interface Contacts{
    image: string | null;
    name: string;
    message: string;
    time: number
    isOnline: boolean;
}

export interface RegisterField{
    name: string;
    email: string;
    password: string;
  
}

export interface LoginField{
    email: string;
    password: string;
}

export interface FriendField{
    name: string;
}
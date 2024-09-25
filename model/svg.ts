export type svgPropT = {
    width?: string;
    height?: string;
}

// Heart
export interface HeartProp extends svgPropT {
    checked: boolean;
}

// MiniHeart
export interface MiniHeartProp extends svgPropT {}

// Comment
export interface CommentProp extends svgPropT {}

// Bookmark
export interface BookmarkProp extends svgPropT {
    checked: boolean;
}

// Bell
export interface BellProp extends svgPropT {
    color: string;
}

// ArrowR
export interface ArrowRProp extends svgPropT {}

// Search
export interface SearchProp extends svgPropT {
    color: string;
}

// Newneek logo
export interface NewneekLogoProp extends svgPropT {}

// Hamburger
export interface HamburgerProp extends svgPropT {}

export type svgPropT = {
    width?: string;
    height?: string;
}

// Heart
export interface HeartProp extends svgPropT {
    checked: boolean;
}

// Comment
export interface CommentProp extends svgPropT {}

// Bookmark
export interface BookmarkProp extends svgPropT {
    checked: boolean;
}

// Bell
export interface BellProp extends svgPropT {}

// ArrowR
export interface ArrowRProp extends svgPropT {}

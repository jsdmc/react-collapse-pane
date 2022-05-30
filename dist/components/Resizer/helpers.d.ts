declare type OrientationProps = {
    $isVertical: boolean;
};
export declare const topBottomCss: import("styled-components").FlattenSimpleInterpolation;
export declare const ButtonWrapper: import("styled-components").StyledComponent<"div", any, OrientationProps, never>;
interface ButtonContainerProps extends OrientationProps {
    $grabberSize: string | null;
    $isLtr: boolean;
}
export declare const ButtonContainer: import("styled-components").StyledComponent<"div", any, ButtonContainerProps, never>;
interface GrabberProps extends OrientationProps {
    $isCollapsed: boolean;
    $isLtr: boolean;
}
export declare const ResizeGrabber: import("styled-components").StyledComponent<"div", any, GrabberProps, never>;
export declare const ResizePresentation: import("styled-components").StyledComponent<"div", any, OrientationProps, never>;
export declare const getSizeWithUnit: (size: string | number) => string;
export {};

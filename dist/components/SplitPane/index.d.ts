import React from 'react';
import { Nullable } from '../../types/utilities';
export declare type SplitType = 'horizontal' | 'vertical';
export declare type Direction = 'ltr' | 'rtl';
export declare type TransitionType = 'fade' | 'grow' | 'zoom' | 'none';
export declare type CollapseDirection = 'left' | 'right' | 'up' | 'down';
export declare type SplitPaneHooks = {
    onDragStarted?: () => void;
    onChange?: (sizes: number[]) => void;
    onSaveSizes?: (sizes: number[]) => void;
    onCollapse?: (collapsedSizes: Nullable<number>[]) => void;
};
export interface CollapseOptions {
    beforeToggleButton: React.ReactElement;
    afterToggleButton: React.ReactElement;
    buttonTransition: TransitionType;
    buttonTransitionTimeout: number;
    buttonPositionOffset: number;
    collapseDirection: CollapseDirection;
    collapseTransitionTimeout: number;
    collapsedSize: number;
    overlayCss: React.CSSProperties;
}
export interface ResizerOptions {
    css?: React.CSSProperties;
    hoverCss?: React.CSSProperties;
    grabberSize?: number | string;
}
export interface SplitPaneProps {
    split: SplitType;
    collapse?: boolean | Partial<CollapseOptions>;
    dir?: Direction;
    className?: string;
    initialSizes?: number[];
    minSizes?: number | number[];
    collapsedSizes?: Nullable<number>[];
    hooks?: SplitPaneHooks;
    resizerOptions?: ResizerOptions;
    children: React.ReactChild[];
}
export declare const SplitPane: React.FC<SplitPaneProps>;

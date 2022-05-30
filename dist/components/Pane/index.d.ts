import * as React from 'react';
import { SplitType } from '../SplitPane';
export interface PaneProps {
    size: number;
    minSize: number;
    isVertical: boolean;
    split: SplitType;
    className?: string;
    isCollapsed: boolean;
    forwardRef: React.Ref<HTMLDivElement>;
    collapseOverlayCss?: React.CSSProperties;
    collapsedIndices: number[];
    children: React.ReactNode;
    transitionTimeout: number | undefined;
}
export declare const Pane: React.MemoExoticComponent<{
    ({ size, minSize, isCollapsed, collapseOverlayCss, isVertical, split, className, children, forwardRef, collapsedIndices, transitionTimeout, }: PaneProps): JSX.Element;
    displayName: string;
}>;

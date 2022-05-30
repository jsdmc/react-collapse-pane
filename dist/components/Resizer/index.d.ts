/// <reference types="react" />
import { BeginDragCallback } from '../SplitPane/hooks/effects/useDragState';
import { CollapseOptions, ResizerOptions } from '../SplitPane';
import { SplitType } from '../SplitPane';
export interface ResizerProps {
    isVertical: boolean;
    isLtr: boolean;
    split: SplitType;
    className?: string;
    paneIndex: number;
    collapseOptions?: CollapseOptions;
    resizerOptions?: Partial<ResizerOptions>;
    onDragStarted: BeginDragCallback;
    onCollapseToggle: (paneIndex: number) => void;
    isCollapsed: boolean;
}
export declare const Resizer: {
    ({ isVertical, split, className, paneIndex, onDragStarted, resizerOptions, collapseOptions, onCollapseToggle, isLtr, isCollapsed, }: ResizerProps): JSX.Element;
    displayName: string;
};

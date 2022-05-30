import * as React from 'react';
import { SplitPaneProps, CollapseOptions } from '..';
import { BeginDragCallback } from './effects/useDragState';
import { Nullable } from '../../../types/utilities';
export interface ChildPane {
    node: React.ReactChild;
    ref: React.RefObject<HTMLDivElement>;
    key: string;
    size: number;
}
interface SplitPaneResizeReturns {
    childPanes: ChildPane[];
    resizingIndex: Nullable<number>;
    handleDragStart: BeginDragCallback;
}
interface SplitPaneResizeOptions extends Pick<SplitPaneProps, 'split' | 'initialSizes' | 'hooks' | 'collapsedSizes' | 'minSizes'> {
    collapsedIndices: number[];
    isLtr: boolean;
    collapseOptions?: CollapseOptions;
    children: React.ReactChild[];
    isVertical: boolean;
}
/**
 * Manages the dragging, size calculation, collapse calculation, and general state management of the panes.  It propogates the results of its complex calculations into the `childPanes` which are used by the rest of the "dumb" react components that just take all of them and render them
 */
export declare const useSplitPaneResize: (options: SplitPaneResizeOptions) => SplitPaneResizeReturns;
export {};

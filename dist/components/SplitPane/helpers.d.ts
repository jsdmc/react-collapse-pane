import React from 'react';
import { SplitType } from '.';
import { Nullable } from '../../types/utilities';
export declare const DEFAULT_MIN_SIZE = 50;
export declare const getMinSize: (index: number, minSizes?: number | number[] | undefined) => number;
export declare const getRefSize: ({ ref, split, }: {
    split: SplitType;
    ref: React.RefObject<HTMLDivElement>;
}) => number;
export declare type MoveDetails = {
    sizes: number[];
    index: number;
    offset: number;
    minSizes: number[];
    collapsedIndices: number[];
    collapsedSize: number;
};
/**
 * Mutates the original array in a recursive fashion, identifying the current sizes, whether they need to be changed, and whether they need to push the next or previous pane.
 */
export declare const moveSizes: ({ index, minSizes, offset, sizes, collapsedIndices, collapsedSize, }: MoveDetails) => number;
interface MoveCollapsedDetails {
    offset: number;
    isReversed: boolean;
    index: number;
    sizes: number[];
    collapsedIndices: number[];
    minSizes: number[];
    collapsedSize: number;
}
/**
 * This is only used when a collapse action is invoked.  It's meant to move any collapsed siblings along with the move.
 */
export declare const moveCollapsedSiblings: ({ offset, isReversed, collapsedIndices, minSizes, sizes, index, collapsedSize, }: MoveCollapsedDetails) => void;
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {
    split: SplitType;
}, never>;
/**
 * Infers the indices of the collapsed panels from an array of nullable collapse sizes.  If the index is null then it's not collapsed.
 */
export declare const convertCollapseSizesToIndices: (sizes?: Nullable<number>[] | undefined) => number[];
export declare const addArray: (arr: number[]) => number;
/**
 * Returns a debounced version of a function. Similar to lodash's _.debounce
 * @param func the function to be debounced
 * @param waitFor the amount of time that must elapse before the debounce expires and the callback is called.
 */
export declare const debounce: <F extends (...args: any[]) => any>(func: F, waitFor: number) => (...args: Parameters<F>) => ReturnType<F>;
export {};

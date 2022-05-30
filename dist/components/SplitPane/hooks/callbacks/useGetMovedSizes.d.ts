import { DragState } from '../effects/useDragState';
export declare const useGetMovedSizes: ({ sizes: originalSizes, isLtr, minSizes, collapsedIndices, isReversed, collapsedSize, }: {
    sizes: number[];
    isLtr: boolean;
    minSizes: number[];
    collapsedIndices: number[];
    isReversed: boolean;
    collapsedSize: number;
}) => (dragState: DragState) => number[];

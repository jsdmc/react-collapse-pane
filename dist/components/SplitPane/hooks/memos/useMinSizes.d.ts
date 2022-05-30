import { CollapseOptions } from '../../index';
/**
 * Returns the current actual minimum size of the panel.  This in some cases means the collapsed size.
 */
export declare const useMinSizes: ({ minSizes, numSizes, collapsedIndices, collapseOptions, }: {
    numSizes: number;
    minSizes?: number | number[] | undefined;
    collapsedIndices: number[];
    collapseOptions?: CollapseOptions | undefined;
}) => number[];

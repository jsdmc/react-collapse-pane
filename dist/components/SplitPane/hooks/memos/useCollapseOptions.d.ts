import { CollapseOptions } from '../../index';
/**
 * function that returns a set of valid collapseOptions from uncertain input.
 */
export declare const useCollapseOptions: ({ originalValue, ...orientationDetails }: {
    originalValue: Partial<CollapseOptions> | undefined | boolean;
    isVertical: boolean;
    isLtr: boolean;
    isReversed: boolean;
}) => Required<CollapseOptions> | undefined;

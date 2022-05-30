import React from 'react';
import { useCollapseSize } from './useCollapseSize';
import { useUncollapseSize } from './useUncollapseSize';
import { SplitPaneHooks } from '../..';
import { Nullable } from '../../../../types/utilities';
export declare const useUpdateCollapsedSizes: ({ movedSizes, setCollapsedSizes, collapsedSizes, collapseSize, sizes, hooks, unCollapseSize, }: {
    movedSizes: number[];
    collapsedSizes: Nullable<number>[];
    sizes: number[];
    collapseSize: ReturnType<typeof useCollapseSize>;
    unCollapseSize: ReturnType<typeof useUncollapseSize>;
    setCollapsedSizes: React.Dispatch<React.SetStateAction<Nullable<number>[]>>;
    hooks?: SplitPaneHooks | undefined;
}) => (indices: number[]) => void;

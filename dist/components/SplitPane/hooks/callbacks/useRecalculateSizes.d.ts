import React from 'react';
export declare const useRecalculateSizes: ({ getCurrentPaneSizes, collapsedSize, collapsedIndices, setMovedSizes, setSizes, }: {
    getCurrentPaneSizes: () => number[];
    collapsedIndices: number[];
    collapsedSize: number;
    originalMinSizes: number | number[] | undefined;
    minSizes: number[];
    setMovedSizes: React.Dispatch<React.SetStateAction<number[]>>;
    setSizes: React.Dispatch<React.SetStateAction<number[]>>;
}) => (initialSizes?: number[] | undefined) => void;

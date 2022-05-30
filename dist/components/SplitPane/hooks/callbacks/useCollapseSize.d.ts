import React from 'react';
export declare const useCollapseSize: ({ isReversed, movedSizes, minSizes, collapsedIndices, setSizes, setMovedSizes, collapsedSize, }: {
    isReversed: boolean;
    movedSizes: number[];
    minSizes: number[];
    collapsedIndices: number[];
    setSizes: React.Dispatch<React.SetStateAction<number[]>>;
    setMovedSizes: React.Dispatch<React.SetStateAction<number[]>>;
    collapsedSize: number;
}) => ({ size, idx }: {
    idx: number;
    size: number;
}) => void;

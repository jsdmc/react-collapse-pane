import React from 'react';
export declare const useUncollapseSize: ({ isReversed, movedSizes, minSizes, setMovedSizes, setSizes, collapsedSize, collapsedIndices, }: {
    isReversed: boolean;
    movedSizes: number[];
    minSizes: number[];
    setSizes: React.Dispatch<React.SetStateAction<number[]>>;
    setMovedSizes: React.Dispatch<React.SetStateAction<number[]>>;
    collapsedSize: number;
    collapsedIndices: number[];
}) => ({ size, idx }: {
    size: number;
    idx: number;
}) => void;

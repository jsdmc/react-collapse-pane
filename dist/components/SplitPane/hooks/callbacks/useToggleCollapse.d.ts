import React from 'react';
export declare const useToggleCollapse: ({ collapsedIndices, setCollapsed, }: {
    collapsedIndices: number[];
    setCollapsed: React.Dispatch<React.SetStateAction<number[]>>;
}) => (index: number) => void;

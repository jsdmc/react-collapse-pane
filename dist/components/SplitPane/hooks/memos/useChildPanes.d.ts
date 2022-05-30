import * as React from 'react';
import { ChildPane } from '../useSplitPaneResize';
export declare const useChildPanes: ({ paneRefs, children, minSizes, }: {
    paneRefs: React.MutableRefObject<Map<string, React.RefObject<HTMLDivElement>>>;
    children: React.ReactChild[];
    minSizes: number[];
}) => Pick<ChildPane, "node" | "ref" | "key">[];

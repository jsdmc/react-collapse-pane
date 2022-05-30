import { ChildPane } from '../useSplitPaneResize';
import { SplitType } from '../..';
export declare const useGetCurrentPaneSizes: ({ childPanes, split, }: {
    childPanes: Pick<ChildPane, 'ref'>[];
    split: SplitType;
}) => () => number[];

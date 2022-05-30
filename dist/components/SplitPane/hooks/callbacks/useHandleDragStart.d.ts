import { BeginDragCallback, ClientPosition } from '../effects/useDragState';
import { SplitPaneHooks } from '../..';
/**
 * Callback that starts the drag process and called at the beginning of the dragging.
 */
export declare const useHandleDragStart: ({ isReversed, hooks, beginDrag, }: {
    isReversed: boolean;
    hooks?: SplitPaneHooks | undefined;
    beginDrag: BeginDragCallback;
}) => ({ index, position }: {
    index: number;
    position: ClientPosition;
}) => void;

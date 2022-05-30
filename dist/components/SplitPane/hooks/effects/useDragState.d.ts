export interface ClientPosition {
    clientX: number;
    clientY: number;
}
export interface DragState {
    offset: number;
    index: number;
}
export declare type BeginDragCallback = (props: {
    position: ClientPosition;
    index: number;
}) => void;
interface UseDragStateReturn {
    dragState: DragState | null;
    beginDrag: BeginDragCallback;
}
export declare const useDragState: (isVertical: boolean, onDragFinished: (dragState: DragState) => void) => UseDragStateReturn;
export {};

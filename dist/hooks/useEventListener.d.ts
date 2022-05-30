export declare const useEventListener: <K extends "abort" | "afterprint" | "beforeprint" | "beforeunload" | "blur" | "canplay" | "canplaythrough" | "change" | "click" | "compassneedscalibration" | "contextmenu" | "dblclick" | "devicelight" | "devicemotion" | "deviceorientation" | "deviceorientationabsolute" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "hashchange" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "message" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "mousewheel" | "MSGestureChange" | "MSGestureDoubleTap" | "MSGestureEnd" | "MSGestureHold" | "MSGestureStart" | "MSGestureTap" | "MSInertiaStart" | "MSPointerCancel" | "MSPointerDown" | "MSPointerEnter" | "MSPointerLeave" | "MSPointerMove" | "MSPointerOut" | "MSPointerOver" | "MSPointerUp" | "offline" | "online" | "orientationchange" | "pagehide" | "pageshow" | "pause" | "play" | "playing" | "popstate" | "progress" | "ratechange" | "readystatechange" | "reset" | "resize" | "scroll" | "seeked" | "seeking" | "select" | "stalled" | "storage" | "submit" | "suspend" | "timeupdate" | "unload" | "volumechange" | "vrdisplayactivate" | "vrdisplayblur" | "vrdisplayconnect" | "vrdisplaydeactivate" | "vrdisplaydisconnect" | "vrdisplayfocus" | "vrdisplaypointerrestricted" | "vrdisplaypointerunrestricted" | "vrdisplaypresentchange" | "waiting" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | "cancel" | "close" | "cuechange" | "dragexit" | "focusin" | "focusout" | "gotpointercapture" | "lostpointercapture" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "securitypolicyviolation" | "selectionchange" | "selectstart" | "toggle" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "transitioncancel" | "transitionend" | "transitionrun" | "transitionstart" | "wheel" | "languagechange" | "messageerror" | "rejectionhandled" | "unhandledrejection">(type: K, listener?: ((this: Window, ev: WindowEventMap[K]) => void) | undefined) => void;
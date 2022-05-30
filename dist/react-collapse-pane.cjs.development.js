'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var material = require('@mui/material');
var ReactDOM = require('react-dom');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var useMergeClasses = function useMergeClasses(classes) {
  return React.useMemo(function () {
    return classes.filter(function (c) {
      return c;
    }).join(' ');
  }, [classes]);
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var DEFAULT_COLLAPSE_TRANSITION_TIMEOUT = 500;
var verticalCss = /*#__PURE__*/styled.css(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 0;\n  height: 100%;\n"])));
var horizontalCss = /*#__PURE__*/styled.css(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 0;\n"])));
var coverCss = /*#__PURE__*/styled.css(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"])));
var PaneRoot = /*#__PURE__*/styled__default.div(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: relative;\n  outline: none;\n  border: 0;\n  overflow: hidden;\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 1;\n  ", "\n  ", "\n"])), function (props) {
  return props.$isVertical ? verticalCss : horizontalCss;
}, function (props) {
  return props.$shouldAnimate && "transition: flex-basis " + props.$timeout + "ms ease-in-out";
});
var WidthPreserver = /*#__PURE__*/styled__default.div(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"])), coverCss, function (props) {
  return props.$isCollapsed && styled.css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      * {\n        z-index: 0;\n      }\n      z-index: 0;\n    "])));
});
var CollapseOverlay = /*#__PURE__*/styled__default.div(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n  ", ";\n  opacity: ", ";\n  transition: opacity ", "ms ease-in-out;\n"])), function (props) {
  return props.$isCollapsed && coverCss;
}, function (props) {
  return props.$isCollapsed && styled.css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      z-index: 1;\n    "])));
}, function (props) {
  return props.$isCollapsed ? 1 : 0;
}, function (props) {
  return props.$timeout;
});

var UnMemoizedPane = function UnMemoizedPane(_ref) {
  var size = _ref.size,
      minSize = _ref.minSize,
      isCollapsed = _ref.isCollapsed,
      _ref$collapseOverlayC = _ref.collapseOverlayCss,
      collapseOverlayCss = _ref$collapseOverlayC === void 0 ? {
    background: 'rgba(220,220,220, 0.1)'
  } : _ref$collapseOverlayC,
      isVertical = _ref.isVertical,
      split = _ref.split,
      className = _ref.className,
      children = _ref.children,
      forwardRef = _ref.forwardRef,
      collapsedIndices = _ref.collapsedIndices,
      transitionTimeout = _ref.transitionTimeout;
  var classes = useMergeClasses(['Pane', split, className]);
  var timeout = React.useMemo(function () {
    return transitionTimeout != null ? transitionTimeout : DEFAULT_COLLAPSE_TRANSITION_TIMEOUT;
  }, [transitionTimeout]);

  var _useState = React.useState(false),
      shouldAnimate = _useState[0],
      setShouldAnimate = _useState[1];

  var didMount = React.useRef(false);
  React.useEffect(function () {
    if (didMount.current) {
      if (timeout !== 0) {
        setShouldAnimate(true);
        setTimeout(function () {
          return setShouldAnimate(false);
        }, 500);
      }
    } else {
      didMount.current = true;
    }
  }, [setShouldAnimate, collapsedIndices, timeout]);
  var minStyle = React.useMemo(function () {
    return isVertical ? {
      minWidth: minSize
    } : {
      minHeight: minSize
    };
  }, [minSize, isVertical]);
  var widthPreserverStyle = isCollapsed ? _extends({}, minStyle, {
    userSelect: 'none'
  }) : minStyle;
  return React.createElement(PaneRoot, {
    "$isVertical": isVertical,
    "$shouldAnimate": timeout !== 0 && shouldAnimate,
    "$timeout": timeout,
    className: classes,
    ref: forwardRef,
    style: {
      flexBasis: size
    }
  }, React.createElement(CollapseOverlay, {
    "$isCollapsed": isCollapsed,
    "$timeout": timeout,
    style: collapseOverlayCss
  }), React.createElement(WidthPreserver, {
    "$isCollapsed": isCollapsed,
    style: widthPreserverStyle
  }, children));
};

UnMemoizedPane.displayName = 'Pane';
var Pane = /*#__PURE__*/React.memo(UnMemoizedPane);

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1;
var topBottomCss = /*#__PURE__*/styled.css(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  top: 0;\n  bottom: 0;\n"])));
var leftRightCss = /*#__PURE__*/styled.css(_templateObject2$1 || (_templateObject2$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  right: 0;\n  left: 0;\n"])));
var ButtonWrapper = /*#__PURE__*/styled__default.div(_templateObject3$1 || (_templateObject3$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  position: absolute;\n"])));
var ButtonContainer = /*#__PURE__*/styled__default.div(_templateObject4$1 || (_templateObject4$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  z-index: 3;\n  position: absolute;\n  overflow: initial;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  ", ";\n  ", "\n"])), function (props) {
  return (props.$isVertical ? 'width' : 'height') + ": " + props.$grabberSize;
}, function (props) {
  return props.$isVertical ? topBottomCss : leftRightCss;
});
var ResizeGrabber = /*#__PURE__*/styled__default.div(_templateObject5$1 || (_templateObject5$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute;\n  z-index: 3;\n  transform: ", ";\n  cursor: ", ";\n  ", "\n"])), function (props) {
  return props.$isVertical ? "translateX(" + (props.$isLtr ? '-' : '') + "50%)" : 'translateY(-50%)';
}, function (props) {
  return !props.$isCollapsed && (props.$isVertical ? 'col-resize' : 'row-resize');
}, function (props) {
  return props.$isVertical ? topBottomCss : leftRightCss;
});
var ResizePresentation = /*#__PURE__*/styled__default.div(_templateObject6$1 || (_templateObject6$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  z-index: 2;\n  position: absolute;\n  ", "\n"])), function (props) {
  return props.$isVertical ? topBottomCss : leftRightCss;
});
var getSizeWithUnit = function getSizeWithUnit(size) {
  return isNaN(size) ? size.toString() : size + "px";
};

var transitionComponentMap = {
  fade: material.Fade,
  grow: material.Grow,
  zoom: material.Zoom,
  none: material.Fade
};
var useTransition = function useTransition(collapseOptions) {
  return React.useMemo(function () {
    var _collapseOptions$butt;

    return transitionComponentMap[(_collapseOptions$butt = collapseOptions == null ? void 0 : collapseOptions.buttonTransition) != null ? _collapseOptions$butt : 'fade'];
  }, [collapseOptions]);
};

var _templateObject$2, _templateObject2$2, _templateObject3$2;
var DEFAULT_MIN_SIZE = 50;
var getMinSize = function getMinSize(index, minSizes) {
  if (typeof minSizes === 'number') {
    if (minSizes > 0) {
      return minSizes;
    }
  } else if (minSizes instanceof Array) {
    var value = minSizes[index];

    if (value > 0) {
      return value;
    }
  }

  return DEFAULT_MIN_SIZE;
};
var getRefSize = function getRefSize(_ref) {
  var _ref$current$getBound, _ref$current;

  var ref = _ref.ref,
      split = _ref.split;
  var sizeAttr = split === 'vertical' ? 'width' : 'height';
  return (_ref$current$getBound = (_ref$current = ref.current) == null ? void 0 : _ref$current.getBoundingClientRect()[sizeAttr]) != null ? _ref$current$getBound : 0;
};
/**
 * Mutates the original array in a recursive fashion, identifying the current sizes, whether they need to be changed, and whether they need to push the next or previous pane.
 */

var moveSizes = function moveSizes(_ref2) {
  var index = _ref2.index,
      minSizes = _ref2.minSizes,
      offset = _ref2.offset,
      sizes = _ref2.sizes,
      collapsedIndices = _ref2.collapsedIndices,
      collapsedSize = _ref2.collapsedSize;

  //recursion break points
  if (!offset || index < 0 || index + 1 >= sizes.length) {
    return 0;
  }

  var isCollapsed = function isCollapsed(idx) {
    return collapsedIndices.includes(idx);
  };

  var firstMinSize = isCollapsed(index) ? collapsedSize : getMinSize(index, minSizes);
  var secondMinSize = isCollapsed(index + 1) ? collapsedSize : getMinSize(index + 1, minSizes);
  var firstSize = sizes[index] + offset;
  var secondSize = sizes[index + 1] - offset;

  if (offset < 0 && firstSize < firstMinSize) {
    var missing = firstSize - firstMinSize;
    var pushedOffset = moveSizes({
      sizes: sizes,
      index: index - 1,
      offset: missing,
      minSizes: minSizes,
      collapsedIndices: collapsedIndices,
      collapsedSize: collapsedSize
    });
    offset -= missing - pushedOffset;
  } else if (offset > 0 && secondSize < secondMinSize) {
    var _missing = secondMinSize - secondSize;

    var _pushedOffset = moveSizes({
      sizes: sizes,
      index: index + 1,
      offset: _missing,
      minSizes: minSizes,
      collapsedIndices: collapsedIndices,
      collapsedSize: collapsedSize
    });

    offset -= _missing - _pushedOffset;
  }

  sizes[index] += offset;
  sizes[index + 1] -= offset;
  return offset;
};
/**
 * This is only used when a collapse action is invoked.  It's meant to move any collapsed siblings along with the move.
 */

var moveCollapsedSiblings = function moveCollapsedSiblings(_ref3) {
  var offset = _ref3.offset,
      isReversed = _ref3.isReversed,
      collapsedIndices = _ref3.collapsedIndices,
      minSizes = _ref3.minSizes,
      sizes = _ref3.sizes,
      index = _ref3.index,
      collapsedSize = _ref3.collapsedSize;

  if (isReversed ? offset > 0 : offset < 0) {
    for (var i = isReversed ? index : index + 1; isReversed ? i > 0 : i < sizes.length - 1; isReversed ? i-- : i++) {
      if (collapsedIndices.includes(i)) {
        moveSizes({
          sizes: sizes,
          index: isReversed ? i - 1 : i,
          offset: offset,
          minSizes: minSizes,
          collapsedIndices: collapsedIndices,
          collapsedSize: collapsedSize
        });
      }
    }
  }
};
var verticalCss$1 = /*#__PURE__*/styled.css(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  left: 0;\n  right: 0;\n  flex-direction: row;\n"])));
var horizontalCss$1 = /*#__PURE__*/styled.css(_templateObject2$2 || (_templateObject2$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  bottom: 0;\n  top: 0;\n  flex-direction: column;\n  min-height: 100%;\n  width: 100%;\n"])));
var Wrapper = /*#__PURE__*/styled__default.div(_templateObject3$2 || (_templateObject3$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex: 1;\n  height: 100%;\n  position: absolute;\n  outline: none;\n  overflow: hidden;\n  ", "\n"])), function (props) {
  return props.split === 'vertical' ? verticalCss$1 : horizontalCss$1;
});
/**
 * Infers the indices of the collapsed panels from an array of nullable collapse sizes.  If the index is null then it's not collapsed.
 */

var convertCollapseSizesToIndices = function convertCollapseSizesToIndices(sizes) {
  var _sizes$reduce;

  return (_sizes$reduce = sizes == null ? void 0 : sizes.reduce(function (prev, cur, idx) {
    return cur !== null ? [].concat(prev, [idx]) : [].concat(prev);
  }, [])) != null ? _sizes$reduce : [];
};
var addArray = function addArray(arr) {
  return arr.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);
};
/**
 * Returns a debounced version of a function. Similar to lodash's _.debounce
 * @param func the function to be debounced
 * @param waitFor the amount of time that must elapse before the debounce expires and the callback is called.
 */

var debounce = function debounce(func, waitFor) {
  var timeout = null;

  var debounced = function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }

    timeout = setTimeout(function () {
      return func.apply(void 0, args);
    }, waitFor);
  };

  return debounced;
};

var defaultResizerOptions = {
  grabberSize: '1rem',
  css: {
    backgroundColor: 'rgba(120, 120, 120, 0.3)'
  },
  hoverCss: {
    backgroundColor: 'rgba(120, 120, 120, 0.6)'
  }
};
var Resizer = function Resizer(_ref) {
  var isVertical = _ref.isVertical,
      split = _ref.split,
      className = _ref.className,
      paneIndex = _ref.paneIndex,
      onDragStarted = _ref.onDragStarted,
      resizerOptions = _ref.resizerOptions,
      collapseOptions = _ref.collapseOptions,
      onCollapseToggle = _ref.onCollapseToggle,
      isLtr = _ref.isLtr,
      isCollapsed = _ref.isCollapsed;

  var _defaultResizerOption = _extends({}, defaultResizerOptions, resizerOptions),
      grabberSize = _defaultResizerOption.grabberSize,
      css = _defaultResizerOption.css,
      hoverCss = _defaultResizerOption.hoverCss;

  var classes = useMergeClasses(['Resizer', split, className]);
  var grabberSizeWithUnit = React.useMemo(function () {
    return getSizeWithUnit(grabberSize);
  }, [grabberSize]);
  var Transition = useTransition(collapseOptions);

  var _useState = React.useState(false),
      isHovered = _useState[0],
      setIsHovered = _useState[1];

  var handleMouseDown = React.useCallback(function (event) {
    event.preventDefault();

    if (!isCollapsed) {
      onDragStarted({
        index: paneIndex,
        position: event
      });
    }
  }, [paneIndex, isCollapsed, onDragStarted]);
  var handleTouchStart = React.useCallback(function (event) {
    event.preventDefault();

    if (!isCollapsed) {
      onDragStarted({
        index: paneIndex,
        position: event.touches[0]
      });
    }
  }, [paneIndex, isCollapsed, onDragStarted]);
  var handleButtonClick = React.useCallback(function (event) {
    event.stopPropagation();
    onCollapseToggle(paneIndex);
  }, [paneIndex, onCollapseToggle]);
  var handleButtonMousedown = React.useCallback(function (event) {
    event.stopPropagation();
  }, []);
  var debouncedSetHovered = React.useCallback(debounce(function () {
    return setIsHovered(true);
  }, 50), [setIsHovered]);
  var handleMouseEnterGrabber = React.useCallback(function () {
    debouncedSetHovered();
  }, [debouncedSetHovered]);
  var debouncedSetNotHovered = React.useCallback(debounce(function () {
    return setIsHovered(false);
  }, 100), [setIsHovered]);
  var handleMouseLeaveGrabber = React.useCallback(function () {
    return debouncedSetNotHovered();
  }, [debouncedSetNotHovered]);
  var getWidthOrHeight = React.useCallback(function (size) {
    return isVertical ? {
      width: size
    } : {
      height: size
    };
  }, [isVertical]);
  var preButtonFlex = React.useMemo(function () {
    var _collapseOptions$butt;

    return Math.max(100 - ((_collapseOptions$butt = collapseOptions == null ? void 0 : collapseOptions.buttonPositionOffset) != null ? _collapseOptions$butt : 0), 0);
  }, [collapseOptions]);
  var postButtonFlex = React.useMemo(function () {
    var _collapseOptions$butt2;

    return Math.max(100 + ((_collapseOptions$butt2 = collapseOptions == null ? void 0 : collapseOptions.buttonPositionOffset) != null ? _collapseOptions$butt2 : 0), 0);
  }, [collapseOptions]);
  var isTransition = (collapseOptions == null ? void 0 : collapseOptions.buttonTransition) !== 'none';
  var collapseButton = collapseOptions ? React__default.createElement(ButtonContainer, {
    "$isVertical": isVertical,
    "$grabberSize": grabberSizeWithUnit,
    "$isLtr": isLtr
  }, React__default.createElement("div", {
    style: {
      flex: "1 1 " + preButtonFlex
    }
  }), React__default.createElement(Transition, {
    "in": isTransition ? isHovered : true,
    timeout: isTransition ? collapseOptions.buttonTransitionTimeout : 0,
    style: {
      flex: '0 0 0',
      position: 'relative'
    }
  }, React__default.createElement(ButtonWrapper, {
    "$isVertical": isVertical,
    onClick: handleButtonClick,
    onMouseDown: handleButtonMousedown
  }, isCollapsed ? collapseOptions.afterToggleButton : collapseOptions.beforeToggleButton)), React__default.createElement("div", {
    style: {
      flex: "1 1 " + postButtonFlex
    }
  })) : null;
  return React__default.createElement("div", {
    key: "grabber.root",
    style: {
      position: 'relative'
    }
  }, React__default.createElement(ResizeGrabber, {
    key: "grabber",
    "$isVertical": isVertical,
    "$isCollapsed": isCollapsed,
    "$isLtr": isLtr,
    style: getWidthOrHeight(grabberSize),
    role: "presentation",
    className: classes,
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart,
    onMouseEnter: handleMouseEnterGrabber,
    onMouseLeave: handleMouseLeaveGrabber
  }, collapseButton), React__default.createElement(material.Fade, {
    key: "resize.presentation.fadein",
    "in": !isHovered
  }, React__default.createElement(ResizePresentation, {
    "$isVertical": isVertical,
    style: _extends({}, getWidthOrHeight(1), css)
  })), React__default.createElement(material.Fade, {
    key: "resize.presentation.fadeout",
    "in": isHovered
  }, React__default.createElement(ResizePresentation, {
    "$isVertical": isVertical,
    style: _extends({}, getWidthOrHeight(1), hoverCss)
  })));
};
Resizer.displayName = 'Resizer';

var useEventListener = function useEventListener(type, listener) {
  return React.useEffect(function () {
    var abortController = new AbortController();
    if (!listener) return;
    window.addEventListener(type, listener);
    return function () {
      window.removeEventListener(type, listener);
      abortController.abort();
    };
  }, [type, listener]);
};

var useDragStateHandlers = function useDragStateHandlers(isVertical, onDragFinished) {
  var _useState = React.useState(false),
      isDragging = _useState[0],
      setIsDragging = _useState[1];

  var _useState2 = React.useState(null),
      dragStartPos = _useState2[0],
      setDragStartPos = _useState2[1];

  var _useState3 = React.useState(null),
      currentPos = _useState3[0],
      setCurrentPos = _useState3[1];

  var _useState4 = React.useState(null),
      draggingIndex = _useState4[0],
      setDraggingIndex = _useState4[1];

  var beginDrag = React.useCallback(function (_ref) {
    var position = _ref.position,
        index = _ref.index;
    var pos = isVertical ? position.clientX : position.clientY;
    ReactDOM.unstable_batchedUpdates(function () {
      setDraggingIndex(index);
      setIsDragging(true);
      setDragStartPos(pos);
      setCurrentPos(pos);
    });
  }, [isVertical]);
  var dragState = React.useMemo(function () {
    if (isDragging && currentPos !== null && dragStartPos !== null && draggingIndex !== null) {
      var offset = currentPos - dragStartPos;
      return {
        offset: offset,
        index: draggingIndex
      };
    } else return null;
  }, [currentPos, dragStartPos, draggingIndex, isDragging]);
  var onMouseUp = React.useCallback(function () {
    if (isDragging && dragState) {
      ReactDOM.unstable_batchedUpdates(function () {
        setIsDragging(false);
        onDragFinished(dragState);
      });
    }
  }, [isDragging, dragState, onDragFinished]);
  var onMouseMove = React.useCallback(function (event) {
    if (isDragging) {
      var pos = isVertical ? event.clientX : event.clientY;
      setCurrentPos(pos);
    } else setCurrentPos(null);
  }, [isDragging, isVertical]);
  var onTouchMove = React.useCallback(function (event) {
    if (isDragging) {
      onMouseMove(event.touches[0]);
    }
  }, [isDragging, onMouseMove]);
  var onMouseEnter = React.useCallback(function (event) {
    if (isDragging) {
      var isPrimaryPressed = (event.buttons & 1) === 1;

      if (!isPrimaryPressed) {
        onMouseUp();
      }
    }
  }, [isDragging, onMouseUp]);
  return {
    beginDrag: beginDrag,
    dragState: dragState,
    onMouseMove: onMouseMove,
    onTouchMove: onTouchMove,
    onMouseUp: onMouseUp,
    onMouseEnter: onMouseEnter
  };
};

var useDragState = function useDragState(isVertical, onDragFinished) {
  var _useDragStateHandlers = useDragStateHandlers(isVertical, onDragFinished),
      beginDrag = _useDragStateHandlers.beginDrag,
      dragState = _useDragStateHandlers.dragState,
      onMouseMove = _useDragStateHandlers.onMouseMove,
      onTouchMove = _useDragStateHandlers.onTouchMove,
      onMouseUp = _useDragStateHandlers.onMouseUp,
      onMouseEnter = _useDragStateHandlers.onMouseEnter;

  useEventListener('mousemove', onMouseMove);
  useEventListener('touchmove', onTouchMove);
  useEventListener('mouseup', onMouseUp);
  useEventListener('mouseenter', onMouseEnter);
  return {
    dragState: dragState,
    beginDrag: beginDrag
  };
};

/**
 * Returns the current actual minimum size of the panel.  This in some cases means the collapsed size.
 */

var useMinSizes = function useMinSizes(_ref) {
  var minSizes = _ref.minSizes,
      numSizes = _ref.numSizes,
      collapsedIndices = _ref.collapsedIndices,
      collapseOptions = _ref.collapseOptions;
  return React.useMemo(function () {
    return Array.from({
      length: numSizes
    }).map(function (_child, idx) {
      var _collapseOptions$coll;

      return collapsedIndices.includes(idx) ? (_collapseOptions$coll = collapseOptions == null ? void 0 : collapseOptions.collapsedSize) != null ? _collapseOptions$coll : DEFAULT_MIN_SIZE : getMinSize(idx, minSizes);
    });
  }, [numSizes, collapseOptions, collapsedIndices, minSizes]);
};

var useGetMovedSizes = function useGetMovedSizes(_ref) {
  var originalSizes = _ref.sizes,
      isLtr = _ref.isLtr,
      minSizes = _ref.minSizes,
      collapsedIndices = _ref.collapsedIndices,
      isReversed = _ref.isReversed,
      collapsedSize = _ref.collapsedSize;
  return React.useCallback(function (dragState) {
    var sizes = [].concat(originalSizes);
    var index = dragState.index;
    var offset = isLtr ? dragState.offset : -dragState.offset;
    moveSizes({
      sizes: sizes,
      index: index,
      offset: offset,
      minSizes: minSizes,
      collapsedIndices: collapsedIndices,
      collapsedSize: collapsedSize
    });
    moveCollapsedSiblings({
      collapsedSize: collapsedSize,
      sizes: sizes,
      minSizes: minSizes,
      collapsedIndices: collapsedIndices,
      isReversed: isReversed,
      index: index,
      offset: offset
    });
    return sizes;
  }, [collapsedIndices, collapsedSize, isLtr, isReversed, minSizes, originalSizes]);
};

var isCollapseDirectionReversed = function isCollapseDirectionReversed(collapseOptions) {
  if (typeof collapseOptions === 'boolean') return false;
  return collapseOptions != null && collapseOptions.collapseDirection ? ['right', 'down'].includes(collapseOptions.collapseDirection) : false;
};
var useIsCollapseReversed = function useIsCollapseReversed(collapseOptions) {
  return React.useMemo(function () {
    return isCollapseDirectionReversed(collapseOptions);
  }, [collapseOptions]);
};

/**
 * called at the end of a drag, sets the final size as well as runs the callback hook
 */

var useHandleDragFinished = function useHandleDragFinished(_ref) {
  var setSizes = _ref.setSizes,
      hooks = _ref.hooks,
      movedSizes = _ref.movedSizes;
  return React.useCallback(function () {
    setSizes(movedSizes);
    hooks == null ? void 0 : hooks.onSaveSizes == null ? void 0 : hooks.onSaveSizes(movedSizes);
  }, [movedSizes, hooks, setSizes]);
};

/**
 * Callback that starts the drag process and called at the beginning of the dragging.
 */

var useHandleDragStart = function useHandleDragStart(_ref) {
  var isReversed = _ref.isReversed,
      hooks = _ref.hooks,
      beginDrag = _ref.beginDrag;
  return React.useCallback(function (_ref2) {
    var index = _ref2.index,
        position = _ref2.position;
    hooks == null ? void 0 : hooks.onDragStarted == null ? void 0 : hooks.onDragStarted();
    beginDrag({
      position: position,
      index: isReversed ? index - 1 : index
    });
  }, [beginDrag, hooks, isReversed]);
};

var useChildPanes = function useChildPanes(_ref) {
  var paneRefs = _ref.paneRefs,
      children = _ref.children,
      minSizes = _ref.minSizes;
  var childPanes = React.useMemo(function () {
    var prevPaneRefs = paneRefs.current;
    paneRefs.current = new Map();
    return children.map(function (node, index) {
      var key = "index." + index;
      var ref = prevPaneRefs.get(key) || React.createRef();
      paneRefs.current.set(key, ref);
      return {
        key: key,
        node: node,
        ref: ref,
        minSize: minSizes[index]
      };
    });
  }, [children, minSizes, paneRefs]);
  return childPanes;
};

var useGetCurrentPaneSizes = function useGetCurrentPaneSizes(_ref) {
  var childPanes = _ref.childPanes,
      split = _ref.split;
  return React.useCallback(function () {
    return childPanes.map(function (_ref2) {
      var ref = _ref2.ref;
      return getRefSize({
        split: split,
        ref: ref
      });
    });
  }, [childPanes, split]);
};

var useCollapseSize = function useCollapseSize(_ref) {
  var isReversed = _ref.isReversed,
      movedSizes = _ref.movedSizes,
      minSizes = _ref.minSizes,
      collapsedIndices = _ref.collapsedIndices,
      setSizes = _ref.setSizes,
      setMovedSizes = _ref.setMovedSizes,
      collapsedSize = _ref.collapsedSize;
  return React.useCallback(function (_ref2) {
    var size = _ref2.size,
        idx = _ref2.idx;
    var offset = isReversed ? -(collapsedSize - size) : collapsedSize - size;
    var index = isReversed ? idx - 1 : idx;
    var sizes = [].concat(movedSizes);
    moveSizes({
      sizes: sizes,
      index: index,
      offset: offset,
      minSizes: minSizes,
      collapsedIndices: collapsedIndices,
      collapsedSize: collapsedSize
    });
    moveCollapsedSiblings({
      offset: offset,
      index: index,
      isReversed: isReversed,
      collapsedIndices: collapsedIndices,
      minSizes: minSizes,
      sizes: sizes,
      collapsedSize: collapsedSize
    });
    ReactDOM.unstable_batchedUpdates(function () {
      setMovedSizes(sizes);
      setSizes(sizes);
    });
  }, [isReversed, collapsedSize, movedSizes, minSizes, collapsedIndices, setMovedSizes, setSizes]);
};

var useUncollapseSize = function useUncollapseSize(_ref) {
  var isReversed = _ref.isReversed,
      movedSizes = _ref.movedSizes,
      minSizes = _ref.minSizes,
      setMovedSizes = _ref.setMovedSizes,
      setSizes = _ref.setSizes,
      collapsedSize = _ref.collapsedSize,
      collapsedIndices = _ref.collapsedIndices;
  return React.useCallback(function (_ref2) {
    var size = _ref2.size,
        idx = _ref2.idx;
    var offset = isReversed ? -(size - 50) : size - 50;
    var index = isReversed ? idx - 1 : idx;
    var newSizes = [].concat(movedSizes);
    moveSizes({
      sizes: newSizes,
      index: index,
      offset: offset,
      minSizes: minSizes,
      collapsedSize: collapsedSize,
      collapsedIndices: collapsedIndices
    });
    ReactDOM.unstable_batchedUpdates(function () {
      setMovedSizes(newSizes);
      setSizes(newSizes);
    });
  }, [collapsedIndices, collapsedSize, isReversed, minSizes, movedSizes, setMovedSizes, setSizes]);
};

var useUpdateCollapsedSizes = function useUpdateCollapsedSizes(_ref) {
  var movedSizes = _ref.movedSizes,
      setCollapsedSizes = _ref.setCollapsedSizes,
      collapsedSizes = _ref.collapsedSizes,
      collapseSize = _ref.collapseSize,
      sizes = _ref.sizes,
      hooks = _ref.hooks,
      unCollapseSize = _ref.unCollapseSize;
  return React.useCallback(function (indices) {
    setCollapsedSizes(collapsedSizes.map(function (size, idx) {
      var isCollapsed = indices.includes(idx);

      if (isCollapsed && size === null) {
        collapseSize({
          size: sizes[idx],
          idx: idx
        });
        hooks == null ? void 0 : hooks.onChange == null ? void 0 : hooks.onChange(sizes);
        return movedSizes[idx]; // when collapsed store current size
      }

      if (!isCollapsed && size !== null) {
        unCollapseSize({
          idx: idx,
          size: size
        }); // when un-collapsed clear size

        hooks == null ? void 0 : hooks.onChange == null ? void 0 : hooks.onChange(sizes);
        return null;
      }

      return size;
    }));
  }, [collapseSize, collapsedSizes, hooks, movedSizes, setCollapsedSizes, sizes, unCollapseSize]);
};

var DEFAULT_COLLAPSE_SIZE = 50;
var useCollapsedSize = function useCollapsedSize(_ref) {
  var collapseOptions = _ref.collapseOptions;
  return React.useMemo(function () {
    var _collapseOptions$coll;

    return (_collapseOptions$coll = collapseOptions == null ? void 0 : collapseOptions.collapsedSize) != null ? _collapseOptions$coll : DEFAULT_COLLAPSE_SIZE;
  }, [collapseOptions]);
};

var useRecalculateSizes = function useRecalculateSizes(_ref) {
  var getCurrentPaneSizes = _ref.getCurrentPaneSizes,
      collapsedSize = _ref.collapsedSize,
      collapsedIndices = _ref.collapsedIndices,
      setMovedSizes = _ref.setMovedSizes,
      setSizes = _ref.setSizes;
  return React.useCallback(function (initialSizes) {
    var curSizes = getCurrentPaneSizes();
    var ratio = initialSizes && initialSizes.length > 0 ? addArray(curSizes) / addArray(initialSizes) : 1;
    var initialRatioSizes = initialSizes ? initialSizes.map(function (size) {
      return size * ratio;
    }) : curSizes;
    var adjustedSizes = initialRatioSizes.map(function (size, idx) {
      if (collapsedIndices.includes(idx)) {
        return collapsedSize;
      }

      if (collapsedIndices.includes(idx - 1)) {
        var totalPrevSizeToAdd = addArray(collapsedIndices.filter(function (_collapsedIdx, index) {
          return index <= idx;
        }).map(function (_i, index) {
          return initialRatioSizes[index] - collapsedSize;
        }));
        return size + totalPrevSizeToAdd;
      }

      return size;
    });
    setMovedSizes(adjustedSizes);
    setSizes(adjustedSizes);
  }, [collapsedIndices, collapsedSize, getCurrentPaneSizes, setMovedSizes, setSizes]);
};

/**
 * Manages the dragging, size calculation, collapse calculation, and general state management of the panes.  It propogates the results of its complex calculations into the `childPanes` which are used by the rest of the "dumb" react components that just take all of them and render them
 */

var useSplitPaneResize = function useSplitPaneResize(options) {
  var _dragState$index;

  var originalChildren = options.children,
      split = options.split,
      originalDefaults = options.initialSizes,
      originalMinSizes = options.minSizes,
      hooks = options.hooks,
      collapsedIndices = options.collapsedIndices,
      originalCollapsedSizes = options.collapsedSizes,
      collapseOptions = options.collapseOptions,
      isVertical = options.isVertical,
      isLtr = options.isLtr;
  var children = !Array.isArray(originalChildren) ? [originalChildren] : originalChildren; // VALUES: const values used throughout the different logic

  var paneRefs = React.useRef(new Map());
  var minSizes = useMinSizes({
    minSizes: originalMinSizes,
    numSizes: children.length,
    collapseOptions: collapseOptions,
    collapsedIndices: collapsedIndices
  });
  var collapsedSize = useCollapsedSize({
    collapseOptions: collapseOptions
  });
  var childPanes = useChildPanes({
    minSizes: minSizes,
    children: children,
    paneRefs: paneRefs
  });
  var isReversed = useIsCollapseReversed(collapseOptions);
  var initialSizes = React.useMemo(function () {
    return children.map(function (_c, idx) {
      var _originalDefaults$idx;

      return (_originalDefaults$idx = originalDefaults == null ? void 0 : originalDefaults[idx]) != null ? _originalDefaults$idx : 1;
    });
  }, [children, originalDefaults]); // STATE: a map keeping track of all of the pane sizes

  var _useState = React.useState(initialSizes),
      sizes = _useState[0],
      setSizes = _useState[1];

  var _useState2 = React.useState(sizes),
      movedSizes = _useState2[0],
      setMovedSizes = _useState2[1];

  var _useState3 = React.useState(originalCollapsedSizes != null ? originalCollapsedSizes : new Array(children.length).fill(null)),
      collapsedSizes = _useState3[0],
      setCollapsedSizes = _useState3[1]; // CALLBACKS  callback functions used throughout. all functions are memoized by useCallback


  var getMovedSizes = useGetMovedSizes({
    minSizes: minSizes,
    sizes: sizes,
    isLtr: isLtr,
    collapsedSize: collapsedSize,
    collapsedIndices: collapsedIndices,
    isReversed: isReversed
  });
  var getCurrentPaneSizes = useGetCurrentPaneSizes({
    childPanes: childPanes,
    split: split
  });
  var handleDragFinished = useHandleDragFinished({
    movedSizes: movedSizes,
    children: children,
    hooks: hooks,
    setSizes: setSizes
  });
  var recalculateSizes = useRecalculateSizes({
    setMovedSizes: setMovedSizes,
    minSizes: minSizes,
    collapsedIndices: collapsedIndices,
    collapsedSize: collapsedSize,
    getCurrentPaneSizes: getCurrentPaneSizes,
    setSizes: setSizes,
    originalMinSizes: originalMinSizes
  }); // STATE: if dragging, contains which pane is dragging and what the offset is.  If not dragging then null

  var _useDragState = useDragState(isVertical, handleDragFinished),
      dragState = _useDragState.dragState,
      beginDrag = _useDragState.beginDrag;

  var collapseSize = useCollapseSize({
    setMovedSizes: setMovedSizes,
    setSizes: setSizes,
    minSizes: minSizes,
    movedSizes: movedSizes,
    isReversed: isReversed,
    collapsedIndices: collapsedIndices,
    collapsedSize: collapsedSize
  });
  var unCollapseSize = useUncollapseSize({
    isReversed: isReversed,
    movedSizes: movedSizes,
    minSizes: minSizes,
    setMovedSizes: setMovedSizes,
    setSizes: setSizes,
    collapsedSize: collapsedSize,
    collapsedIndices: collapsedIndices
  });
  var updateCollapsedSizes = useUpdateCollapsedSizes({
    sizes: sizes,
    collapsedSizes: collapsedSizes,
    setCollapsedSizes: setCollapsedSizes,
    movedSizes: movedSizes,
    collapseSize: collapseSize,
    unCollapseSize: unCollapseSize,
    hooks: hooks
  }); // EFFECTS: manage updates and calculations based on dependency changes for states that are interacted with by multiple functions

  React.useEffect(function () {
    if (dragState !== null) setMovedSizes(getMovedSizes(dragState)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragState]);
  React.useEffect(function () {
    if (dragState !== null) hooks == null ? void 0 : hooks.onChange == null ? void 0 : hooks.onChange(movedSizes);
  }, [dragState, movedSizes, hooks]);
  React.useEffect(function () {
    hooks == null ? void 0 : hooks.onCollapse == null ? void 0 : hooks.onCollapse(collapsedSizes);
  }, [collapsedSizes, hooks]);
  React.useEffect(function () {
    updateCollapsedSizes(collapsedIndices); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsedIndices]); // recalculate initial sizes on window size change to maintain min sizes
  // const resetSizes = useCallback(
  //   debounce(() => recalculateSizes(), 100),
  //   [recalculateSizes]
  // );
  // useEventListener('resize', resetSizes);

  React.useEffect(function () {
    return recalculateSizes(initialSizes);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [initialSizes]); //populates the sizes of all the initially populated childPanes, adjust sizes based on collapsed state

  var childPanesWithSizes = React.useMemo(function () {
    return childPanes.map(function (child, index) {
      return _extends({}, child, {
        size: movedSizes[index]
      });
    });
  }, [childPanes, movedSizes]);
  var handleDragStart = useHandleDragStart({
    isReversed: isReversed,
    hooks: hooks,
    beginDrag: beginDrag
  });
  return {
    childPanes: childPanesWithSizes,
    resizingIndex: (_dragState$index = dragState == null ? void 0 : dragState.index) != null ? _dragState$index : null,
    handleDragStart: handleDragStart
  };
};

var useToggleCollapse = function useToggleCollapse(_ref) {
  var collapsedIndices = _ref.collapsedIndices,
      setCollapsed = _ref.setCollapsed;
  return React.useCallback(function (index) {
    collapsedIndices.includes(index) ? setCollapsed(collapsedIndices.filter(function (i) {
      return i !== index;
    })) : setCollapsed([].concat(collapsedIndices, [index]));
  }, [collapsedIndices, setCollapsed]);
};

var useGetIsPaneCollapsed = function useGetIsPaneCollapsed(_ref) {
  var collapsedIndices = _ref.collapsedIndices;
  return React.useCallback(function (paneIndex) {
    return collapsedIndices.length > 0 ? collapsedIndices.includes(paneIndex) : false;
  }, [collapsedIndices]);
};

var useIsLtr = function useIsLtr(_ref) {
  var split = _ref.split,
      dir = _ref.dir;
  return React.useMemo(function () {
    return split === 'vertical' ? dir !== 'rtl' : true;
  }, [split, dir]);
};

var useCollapsedSizes = function useCollapsedSizes(_ref) {
  var collapsedSizes = _ref.collapsedSizes,
      children = _ref.children,
      collapse = _ref.collapse;
  return React.useMemo(function () {
    return (collapsedSizes == null ? void 0 : collapsedSizes.length) === children.length && !!collapse ? collapsedSizes : new Array(children.length).fill(null);
  }, [children.length, collapse, collapsedSizes]);
};

var _templateObject$3, _paths;
var Button = /*#__PURE__*/styled__default.div(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 1.8rem;\n  height: 1.8rem;\n  border-radius: 300px;\n  background: #0092d1;\n  cursor: pointer;\n  user-select: none;\n  text-align: center;\n  color: white;\n  border: 2px rgba(200, 200, 200, 0.5) solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"])));
var Direction;

(function (Direction) {
  Direction[Direction["left"] = 0] = "left";
  Direction[Direction["right"] = 1] = "right";
  Direction[Direction["up"] = 2] = "up";
  Direction[Direction["down"] = 3] = "down";
})(Direction || (Direction = {}));

var paths = (_paths = {}, _paths[Direction.left] = 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z', _paths[Direction.right] = 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z', _paths[Direction.up] = 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z', _paths[Direction.down] = 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z', _paths);

var Icon = function Icon(props) {
  return React__default.createElement("svg", Object.assign({}, props, {
    focusable: "false",
    fill: "white",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }), React__default.createElement("path", {
    d: paths[props.dir]
  }));
};

var CollapseButton = function CollapseButton(props) {
  var dirs = props.isVertical ? [Direction.left, Direction.right] : [Direction.up, Direction.down];

  var _ref = props.isReversed ? dirs.reverse() : dirs,
      a = _ref[0],
      b = _ref[1];

  var dir = props.isBefore ? props.isLtr ? a : b : props.isLtr ? b : a;
  return React__default.createElement(Button, null, React__default.createElement(Icon, {
    dir: dir
  }));
};

var getDefault = function getDefault(props) {
  return {
    beforeToggleButton: React__default.createElement(CollapseButton, Object.assign({}, props, {
      isBefore: true
    })),
    afterToggleButton: React__default.createElement(CollapseButton, Object.assign({}, props, {
      isBefore: false
    })),
    collapseDirection: props.isVertical ? 'left' : 'up',
    overlayCss: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    buttonTransitionTimeout: 200,
    buttonTransition: 'grow',
    collapsedSize: 50,
    collapseTransitionTimeout: 500,
    buttonPositionOffset: 0
  };
};
/**
 * function that returns a set of valid collapseOptions from uncertain input.
 */


var useCollapseOptions = function useCollapseOptions(_ref) {
  var originalValue = _ref.originalValue,
      orientationDetails = _objectWithoutPropertiesLoose(_ref, ["originalValue"]);

  if (originalValue === undefined || originalValue === false) return undefined;
  if (originalValue === true) return getDefault(orientationDetails);
  return _extends({}, getDefault(orientationDetails), originalValue);
};

var SplitPane = function SplitPane(props) {
  var collapsedSizes = useCollapsedSizes(props);
  var isLtr = useIsLtr(props);
  var isVertical = props.split === 'vertical';
  var isReversed = useIsCollapseReversed(props.collapse);
  var collapseOptions = useCollapseOptions({
    isVertical: isVertical,
    isLtr: isLtr,
    originalValue: props.collapse,
    isReversed: isReversed
  });
  var updatedCollapsedIndices = convertCollapseSizesToIndices(collapsedSizes);

  var _useState = React.useState(updatedCollapsedIndices),
      collapsedIndices = _useState[0],
      setCollapsed = _useState[1];

  React.useEffect(function () {
    setCollapsed(updatedCollapsedIndices);
  }, [updatedCollapsedIndices]);

  var _useSplitPaneResize = useSplitPaneResize(_extends({}, props, {
    isLtr: isLtr,
    isVertical: isVertical,
    collapsedIndices: collapsedIndices,
    collapsedSizes: collapsedSizes,
    collapseOptions: collapseOptions
  })),
      childPanes = _useSplitPaneResize.childPanes,
      handleDragStart = _useSplitPaneResize.handleDragStart,
      resizingIndex = _useSplitPaneResize.resizingIndex;

  var splitPaneClass = useMergeClasses(['SplitPane', props.split, props.className]);
  var resizingClass = useMergeClasses(['Resizing', props.className]);
  var toggleCollapse = useToggleCollapse({
    setCollapsed: setCollapsed,
    collapsedIndices: collapsedIndices
  });
  var getIsPaneCollapsed = useGetIsPaneCollapsed({
    collapsedIndices: collapsedIndices
  });

  if (childPanes.length <= 1) {
    {
      console.error('[react-collapse-pane] - You must have more than one non-null child inside the SplitPane component.  Even though SplitPane does not crash, you should resolve this error.');
    }

    return React__default.createElement(React__default.Fragment, null, props.children);
  } // stacks the children and places a resizer in between each of them. Each resizer has the same index as the pane that it controls.


  var entries = childPanes.map(function (pane, paneIndex) {
    var resizerPaneIndex = isReversed ? paneIndex : paneIndex - 1;
    return React__default.createElement(React__default.Fragment, {
      key: paneIndex
    }, paneIndex - 1 >= 0 ? React__default.createElement(Resizer, {
      key: "resizer." + resizerPaneIndex,
      isCollapsed: getIsPaneCollapsed(resizerPaneIndex),
      isVertical: isVertical,
      isLtr: isLtr,
      split: props.split,
      className: resizingIndex === resizerPaneIndex ? resizingClass : props.className,
      paneIndex: resizerPaneIndex,
      resizerOptions: props.resizerOptions,
      collapseOptions: collapseOptions,
      onDragStarted: handleDragStart,
      onCollapseToggle: toggleCollapse
    }) : null, React__default.createElement(Pane, {
      key: "pane." + paneIndex,
      forwardRef: pane.ref,
      size: pane.size,
      isCollapsed: getIsPaneCollapsed(paneIndex),
      collapsedIndices: collapsedIndices,
      split: props.split,
      isVertical: isVertical,
      minSize: getMinSize(paneIndex, props.minSizes),
      className: props.className,
      transitionTimeout: collapseOptions == null ? void 0 : collapseOptions.collapseTransitionTimeout,
      collapseOverlayCss: collapseOptions == null ? void 0 : collapseOptions.overlayCss
    }, pane.node));
  });
  return React__default.createElement(Wrapper, {
    key: "splitpanewrapper",
    className: splitPaneClass,
    split: props.split
  }, entries);
};
SplitPane.displayName = 'SplitPane';

exports.SplitPane = SplitPane;
//# sourceMappingURL=react-collapse-pane.cjs.development.js.map

import { forwardRef, useState } from "react";
import { css } from "@emotion/css";
import PropTypes from "prop-types";
import "./style.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const SitoImage = forwardRef((a, b) => {
  const [c, d] = useState(1),
    {
      src: e,
      errorComponent: f,
      loadingComponent: g,
      alt: h,
      sx: i,
      id: j,
      name: k,
      style: l,
    } = a,
    m = (a) => 0 <= a.indexOf("%"),
    n = (a) => (m(a) ? "100%" : a),
    o = css({
      width: i.width ? i.width : "100%",
      height: i.width ? i.width : "100%",
      img: {
        filter: i.filter,
        borderRadius: i.borderRadius,
        objectFit: i.objectFit,
        objectPosition: i.objectPosition,
        ...i,
        width: `${n(i.width ? i.width : "100%")}`,
        height: `${n(i.height ? i.height : "100%")}`,
        opacity: 0,
        transition: "opacity 200ms ease",
      },
    });
  return _jsx("div", {
    ref: b,
    id: j,
    name: k,
    style: l,
    className: o,
    children: _jsxs("div", {
      className: css({ position: "relative", width: "100%", height: "100%" }),
      children: [
        _jsx("img", {
          className: o,
          src: e,
          alt: h,
          loading: "lazy",
          onLoad: (a) => {
            d(0), (a.target.style.opacity = 1);
          },
          onError: () => d(-1),
        }),
        _jsxs("div", {
          className: css({
            zIndex: 1 === c ? 1 : -1,
            position: "absolute",
            top: 0,
            left: 0,
            width: `${n(i.width ? i.width : "100%")}`,
            height: `${n(i.height ? i.height : "100%")}`,
            transition: "all 500ms ease",
            opacity: 1 === c ? 1 : 0,
          }),
          children: [
            g
              ? g
              : _jsx("div", {
                  className: `shimmer ${css({
                    width: `${n(i.width ? i.width : "100%")}`,
                    height: `${n(i.height ? i.height : "100%")}`,
                  })}`,
                }),
            -1 === c && f,
          ],
        }),
      ],
    }),
  });
});
(SitoImage.defaultProps = {
  id: "",
  name: "",
  alt: "no-image",
  src: "",
  errorComponent: void 0,
  loadingComponent: void 0,
  sx: {},
  style: {},
  extraProps: {},
}),
  (SitoImage.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    errorComponent: PropTypes.node,
    loadingComponent: PropTypes.node,
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
    style: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
    extraProps: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  });
export default SitoImage;

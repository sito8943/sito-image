import { forwardRef, useState } from "react";
import { css } from "@emotion/css";
import PropTypes from "prop-types";
import "./style.css";
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
      width: m,
      height: n,
    } = a,
    o = (a) => 0 <= a.indexOf("%"),
    p = (a) => (o(a) ? "100%" : a),
    q = css({
      width: i.width ? i.width : m,
      height: i.width ? i.width : m,
      img: {
        filter: i.filter,
        borderRadius: i.borderRadius,
        objectFit: i.objectFit,
        objectPosition: i.objectPosition,
        ...i,
        width: `${p(i.width ? i.width : m)}`,
        height: `${p(i.height ? i.height : n)}`,
        opacity: 0,
        transition: "opacity 200ms ease",
      },
    });
  return React.createElement(
    "div",
    { ref: b, id: j, name: k, style: l, className: q },
    React.createElement(
      "div",
      { className: { position: "relative", width: "100%", height: "100%" } },
      React.createElement("img", {
        className: q,
        src: e,
        alt: h,
        loading: "lazy",
        onLoad: (a) => {
          d(0), (a.target.style.opacity = 1);
        },
        onError: () => d(-1),
      })
    ),
    React.createElement(
      "div",
      {
        className: css({
          zIndex: 1 === c ? 1 : -1,
          position: "relative",
          top: 0,
          left: 0,
          width: `${p(i.width ? i.width : m)}`,
          height: `${p(i.height ? i.height : n)}`,
          opacity: 1 === c ? 1 : 0,
        }),
      },
      g
        ? g
        : React.createElement("div", {
            className: `shimmer ${css({
              zIndex: 1 === c ? 1 : -1,
              position: "absolute",
              top: 0,
              left: 0,
              width: `${p(i.width ? i.width : m)}`,
              height: `${p(i.height ? i.height : n)}`,
              transition: "all 500ms ease",
              opacity: 1 === c ? 1 : 0,
            })}`,
          }),
      -1 === c && f
    )
  );
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
  width: "100%",
  height: "100%",
}),
  (SitoImage.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    errorComponent: PropTypes.node,
    loadingComponent: PropTypes.node,
    width: PropTypes.number,
    height: PropTypes.number,
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

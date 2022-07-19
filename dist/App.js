import { forwardRef } from "react"; // @emotion

import { css } from "@emotion/css"; // prop-types

import PropTypes from "prop-types"; // image-shimmer

import { Image, Shimmer } from "react-shimmer"; // images

import crash from "./assets/images/crash.webp";
import { jsx as _jsx } from "react/jsx-runtime";
const SitoImage = /*#__PURE__*/ forwardRef((props, ref) => {
  const { src, alt, sx, id, name, style, width, height } = props;
  const { widthSx, heightSx } = sx;
  const newSx = css({
    width: "100%",
    height: "100%",
    img: {
      width,
      height,
      filter: sx.filter,
      borderRadius: sx.borderRadius,
      objectFit: sx.objectFit,
      objectPosition: sx.objectPosition,
      ...sx,
    },
  });
  return /*#__PURE__*/ _jsx("div", {
    ref: ref,
    id: id,
    name: name,
    style: style,
    className: newSx,
    children: /*#__PURE__*/ _jsx(Image, {
      src: src,
      alt: alt,
      fallback: /*#__PURE__*/ _jsx(Shimmer, {
        width: widthSx || width,
        height: heightSx || height,
      }),
    }),
  });
});
SitoImage.defaultProps = {
  id: "",
  name: "",
  alt: "no-image",
  src: crash,
  sx: {},
  style: {},
  extraProps: {},
  width: 250,
  height: 250,
};
SitoImage.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
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
};
export default SitoImage;

import { forwardRef } from "react"; // @emotion

import { css } from "@emotion/css"; // prop-types

import PropTypes from "prop-types"; // images

import crash from "./assets/images/crash.webp";
import { jsx as _jsx } from "react/jsx-runtime";
const SitoImage = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    src,
    alt,
    className,
    sx,
    id,
    name,
    style
  } = props;
  const newSx = css({ ...sx
  });
  return /*#__PURE__*/_jsx("img", {
    ref: ref,
    id: id,
    name: name,
    src: src,
    alt: alt,
    style: style,
    className: `${className} ${newSx}`
  });
});
SitoImage.defaultProps = {
  id: "",
  name: "",
  className: "",
  alt: "no-image",
  src: crash,
  sx: {},
  style: {},
  extraProps: {}
};
SitoImage.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  style: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  extraProps: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
};
export default SitoImage;
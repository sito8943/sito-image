import { forwardRef, useState } from "react";

// @emotion
import { css } from "@emotion/css";

// prop-types
import PropTypes from "prop-types";

// style
import "./style.css";

const SitoImage = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(1);

  const {
    src,
    errorComponent,
    loadingComponent,
    alt,
    sx,
    id,
    name,
    style,
    width,
    height,
  } = props;

  const isPercent = (dimension) => dimension.indexOf("%") >= 0;

  const parseImageDimension = (dimension) => {
    if (isPercent(dimension)) return "100%";
    return dimension;
  };

  const newSx = css({
    width: sx.width ? sx.width : width,
    height: sx.width ? sx.width : width,
    img: {
      filter: sx.filter,
      borderRadius: sx.borderRadius,
      objectFit: sx.objectFit,
      objectPosition: sx.objectPosition,
      ...sx,
      width: `${parseImageDimension(sx.width ? sx.width : width)}`,
      height: `${parseImageDimension(sx.height ? sx.height : height)}`,
      opacity: 0,
      transition: "opacity 200ms ease",
    },
  });

  return (
    <div ref={ref} id={id} name={name} style={style} className={newSx}>
      <div className={{ position: "relative", width: "100%", height: "100%" }}>
        <img
          className={newSx}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={(e) => {
            setLoading(0);
            e.target.style.opacity = 1;
          }}
          onError={(e) => setLoading(-1)}
        />
      </div>
      <div
        className={css({
          zIndex: loading === 1 ? 1 : -1,
          position: "absolute",
          top: 0,
          left: 0,
          width: `${parseImageDimension(sx.width ? sx.width : width)}`,
          height: `${parseImageDimension(sx.height ? sx.height : height)}`,
          opacity: loading === 1 ? 1 : 0,
        })}
      >
        {!loadingComponent ? (
          <div
            className={`shimmer ${css({
              zIndex: loading === 1 ? 1 : -1,
              position: "absolute",
              top: 0,
              left: 0,
              width: `${parseImageDimension(sx.width ? sx.width : width)}`,
              height: `${parseImageDimension(sx.height ? sx.height : height)}`,
              transition: "all 500ms ease",
              opacity: loading === 1 ? 1 : 0,
            })}`}
          />
        ) : (
          loadingComponent
        )}
        {loading === -1 && errorComponent}
      </div>
    </div>
  );
});

SitoImage.defaultProps = {
  id: "",
  name: "",
  alt: "no-image",
  src: "",
  errorComponent: undefined,
  loadingComponent: undefined,
  sx: {},
  style: {},
  extraProps: {},
  width: "100%",
  height: "100%",
};

SitoImage.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  errorComponent: PropTypes.node,
  loadingComponent: PropTypes.node,
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

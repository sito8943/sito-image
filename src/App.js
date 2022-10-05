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
    onLoad,
    onError,
    alt,
    sx,
    id,
    name,
    style,
  } = props;

  const isPercent = (dimension) => dimension.indexOf("%") >= 0;

  const parseImageDimension = (dimension) => {
    if (isPercent(dimension)) return "100%";
    return dimension;
  };

  const newSx = css({
    width: sx.width ? sx.width : "100%",
    height: sx.width ? sx.width : "100%",
    img: {
      filter: sx.filter,
      borderRadius: sx.borderRadius,
      objectFit: sx.objectFit,
      objectPosition: sx.objectPosition,
      ...sx,
      width: `${parseImageDimension(sx.width ? sx.width : "100%")}`,
      height: `${parseImageDimension(sx.height ? sx.height : "100%")}`,
      opacity: 0,
      transition: "opacity 200ms ease",
    },
  });

  return (
    <div ref={ref} id={id} name={name} style={style} className={newSx}>
      <div
        className={css({ position: "relative", width: "100%", height: "100%" })}
      >
        <img
          className={newSx}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={(e) => {
            setLoading(0);
            e.target.style.opacity = 1;
            onLoad(e);
          }}
          onError={(e) => {
            setLoading(-1);
            onError(e);
          }}
        />
        <div
          className={css({
            zIndex: loading === 1 ? 1 : -1,
            position: "absolute",
            top: 0,
            left: 0,
            width: `${parseImageDimension(sx.width ? sx.width : "100%")}`,
            height: `${parseImageDimension(sx.height ? sx.height : "100%")}`,
            transition: "all 500ms ease",
            opacity: loading === 1 ? 1 : 0,
          })}
        >
          {!loadingComponent ? (
            <div
              className={`shimmer ${css({
                width: `${parseImageDimension(sx.width ? sx.width : "100%")}`,
                height: `${parseImageDimension(
                  sx.height ? sx.height : "100%"
                )}`,
              })}`}
            />
          ) : (
            loadingComponent
          )}
          {loading === -1 && errorComponent}
        </div>
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
  onLoad: () => {},
  onError: () => {},
};

SitoImage.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  errorComponent: PropTypes.node,
  loadingComponent: PropTypes.node,
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
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

export default SitoImage;

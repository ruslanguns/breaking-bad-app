import ContentLoader from "react-content-loader";
import PropTypes from "prop-types";

/**
 * Loading component for CharacterItem
 *
 * @param {*} props
 * @returns
 */
const CharacterItemLoading = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={330}
    viewBox="0 0 350 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="7" rx="5" ry="5" width="332" height="227" />
    <rect x="11" y="243" rx="3" ry="3" width="139" height="14" />
    <rect x="11" y="268" rx="3" ry="3" width="242" height="11" />
    <rect x="11" y="291" rx="3" ry="3" width="87" height="31" />
  </ContentLoader>
);

CharacterItemLoading.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default CharacterItemLoading;

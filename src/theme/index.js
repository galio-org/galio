import React from 'react';
import PropTypes from 'prop-types';

// import COLORS & SIZES
import GALIO_COLORS from './colors';
import GALIO_SIZES from './sizes';

// default theme with COLORS & SIZES
const GalioTheme = {
  COLORS: GALIO_COLORS,
  SIZES: GALIO_SIZES,
};

export default GalioTheme;

// creating the GalioTheme context
const GalioContext = React.createContext();

/*
*   withGalio
*   args: Component - React Component, styles to be added to Component
*   theme: if no styles or theme add default theme={ SIZES, COLORS }
*/

export function withGalio(Component, styles) {
  // eslint-disable-next-line react/no-multi-comp
  return class extends React.Component {
    render() {
      const { props } = this;
      return (
        <GalioContext.Consumer>
          {theme => (
            <Component
              {...props}
              theme={{ ...GalioTheme, ...theme }}
              styles={styles && styles({ ...GalioTheme, ...theme })}
            />
          )}
        </GalioContext.Consumer>
      );
    }
  };
}

/*
*   GalioProvider using React.Component
*   GalioContext.Provider value has the default value from { COLORS, SIZES }
*/

// eslint-disable-next-line react/no-multi-comp
export class GalioProvider extends React.Component {
  static defaultProps = {
    children: null,
    theme: {},
  }

  render() {
    const { theme, children } = this.props;
    const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;

    const providerTheme = {
      COLORS: { ...GalioTheme.COLORS, ...CUSTOM_COLORS },
      SIZES: { ...GalioTheme.SIZES, ...CUSTOM_SIZES },
      ...customTheme
    };

    return (
      <GalioContext.Provider value={providerTheme}>
        {children}
      </GalioContext.Provider>
    );
  }
}

GalioProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any,
};

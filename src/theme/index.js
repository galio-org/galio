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

// creating a theme context
const GalioContext = React.createContext();

/*
*   withGalio
*   args: Component - React Component, styles to be added to Component
*   theme: if no styles or theme add default theme={ SIZES, COLORS }
*   componentStyles: if styles & theme are set then pass "styles" to Component props
*   componentTheme: if no styles & theme then pass "{ theme }" to props
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
              theme={theme || GalioTheme}
              styles={styles && styles(theme || GalioTheme)}
              {...props}
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
  }

  render() {
    const { children } = this.props;
    return (
      <GalioContext.Provider value={GalioTheme}>
        {children}
      </GalioContext.Provider>
    );
  }
}

GalioProvider.propTypes = {
  children: PropTypes.any,
};

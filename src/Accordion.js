import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Block from './Block';
import Icon from './Icon';
import GalioTheme, { withGalio } from './theme';

// work in progress

function Accordion(props) {
    return (
        <Block style={styles.container} />
    );
}

const styles = theme => StyleSheet.create({
    container: {
        width: 200
    }
});

export default withGalio(Accordion, styles);
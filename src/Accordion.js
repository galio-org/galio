import React from 'react';
import { Animated, TouchableWithoutFeedback, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Block from './Block';
import Icon from './Icon';
import Text from './Text';
import GalioTheme, { withGalio } from './theme';

// work in progress (animation for extension and Galio syling)
function AccordionContent({ content, contentStyle }) {
  return <Text style={[
    { padding: 8 },
    contentStyle
  ]}>{content}</Text>;
}

function AccordionHeader({
  expanded,
  expandedIcon,
  headerStyle,
  icon,
  title
}) {
  return (
    <Block style={[
      styles.defaultHeaderStyles,
      headerStyle
    ]}>
      <Text>{title}</Text>
      {expanded ? (expandedIcon || <Icon name="keyboard-arrow-up" family="material" size={12} />) : (icon || <Icon name="keyboard-arrow-down" family="material" size={12} />)}
    </Block>
  );
}

function AccordionItem({
  expanded,
  expandedIcon,
  headerStyle,
  contentStyle,
  icon,
  index,
  item,
  onAccordionClose,
  onAccordionOpen,
  setSelected,
}) {
  return (
    <Block>
      <TouchableWithoutFeedback
        onPress={() => {
          onAccordionOpen && !expanded && onAccordionOpen(item, index);
          onAccordionClose && expanded && onAccordionClose(item, index);
          setSelected(index);
        }}
      >
        <Block>
          <AccordionHeader 
            expanded={expanded}
            expandedIcon={expandedIcon}
            headerStyle={headerStyle}
            icon={icon}
            title={item.title}
          />
        </Block>
      </TouchableWithoutFeedback>
      {expanded ? 
        <AccordionContent 
          content={item.content}
          contentStyle={contentStyle}
        /> : null
      }
    </Block>
  );
}


function Accordion({ 
  theme,
  dataArray,
  icon,
  expandedIcon,
  headerStyle,
  contentStyle,
  opened,
  onAccordionOpen,
  onAccordionClose,
  style
}) {
  const [selected, setSelected] = useState(opened)
  return (
    <FlatList 
      data={dataArray}
      extraData={selected}
      style={[
        {
          borderColor: '#282C34',
          borderWidth: 2
        },
        style
      ]}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item, index }) => (
          <AccordionItem 
            key={String(index)}
            expanded={selected === index}
            expandedIcon={expandedIcon} //icon pt expand
            icon={icon}
            headerStyle={headerStyle}
            contentStyle={contentStyle}
            onAccordionOpen={onAccordionOpen}
            onAccordionClose={onAccordionClose}
            item={item}
            index={index}
            setSelected={s => setSelected(s)}
          />
        )
      }
    />
  );
  
}

Accordion.propTypes = {
    theme: PropTypes.any,
    dataArray: PropTypes.array,
    opened: PropTypes.number,
    style: PropTypes.any,
    icon: PropTypes.any,
    expandedIcon: PropTypes.any,
    headerStyle: PropTypes.any,
    contentStyle: PropTypes.any,
    onAccordionClose: PropTypes.func,
    onAccordionOpen: PropTypes.func
};

Accordion.defaultProps = {
  theme: GalioTheme,
  opened: 0
};

const styles = theme =>
  StyleSheet.create({
    container: {
      width: 200,
    },
    defaultHeaderStyles: {
      flexDirection: 'row',
      padding: theme.SIZES.BASE,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });

export default withGalio(Accordion, styles);

// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.css';

type Props = {|
  children?: any,
  htmlFor: string,
|};

export default function Label(props: Props) {
  const { children, htmlFor } = props;

  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

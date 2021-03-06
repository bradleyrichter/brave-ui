'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserButton = function BrowserButton(props) {
  var theming = {};

  // Default button theme
  // TODO: do we really need a default button?
  theming['--bg'] = _theme2.default.browserButton.default.bg;
  theming['--color'] = _theme2.default.browserButton.default.color;
  theming['--hoverColor'] = _theme2.default.browserButton.default.hoverColor;

  // Primary button theme
  theming['--primary-bg'] = _theme2.default.browserButton.primary.bg;
  theming['--primary-gradient1'] = _theme2.default.browserButton.primary.gradient1;
  theming['--primary-gradient2'] = _theme2.default.browserButton.primary.gradient2;
  theming['--primary-color'] = _theme2.default.browserButton.primary.color;
  theming['--primary-hoverColor'] = _theme2.default.browserButton.primary.hoverColor;
  theming['--primary-borderHoverColor'] = _theme2.default.browserButton.primary.borderHoverColor;

  // Secondary button theme
  theming['--secondary-bg'] = _theme2.default.browserButton.secondary.bg;
  theming['--secondary-color'] = _theme2.default.browserButton.secondary.color;
  theming['--secondary-hoverColor'] = _theme2.default.browserButton.secondary.hoverColor;
  theming['--secondary-borderHoverColor'] = _theme2.default.browserButton.secondary.borderHoverColor;

  /**
   * Custom style is a separate entity and is also defined as a prop
   * i.e. <BrowserButton size='16px' fontSize='10px' />
   */
  var customStyle = {};

  if (props.size != null) {
    customStyle['--size'] = props.size;
  }

  if (props.fontSize != null) {
    customStyle['--fontSize'] = props.fontSize;
    customStyle['--size'] = 'calc(' + props.fontSize + ' * 2)';
  }

  return _react2.default.createElement(
    'button',
    {
      'data-test-id': props.testId || 'browserButton',
      'data-test-type': props.as || 'default',
      style: Object.assign(theming, customStyle),
      onClick: props.onClick,
      disabled: props.disabled,
      className: (0, _noImportant.css)(styles.browserButton, props.as === 'primary' && styles.browserButton_primaryColor, props.as === 'secondary' && styles.browserButton_secondaryColor, props.disabled && styles.browserButton_disabled) },
    props.label
  );
}; /* This Source Code Form is subject to the terms of the Mozilla Public
    * License, v. 2.0. If a copy of the MPL was not distributed with this file,
    * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Implementator notes:
 * This file is the home of default, primary and secondary icons
 * There are other several buttons that may benefit
 * from it, which is still an early draft.
 *
 * Plan is to make the component easy to change, so if your
 * addition requires a lot of changes, consider creating another
 * component using this as a boilerlate
 */

var styles = _noImportant.StyleSheet.create({
  browserButton: {
    // Positioning properties
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',

    // Font properties
    fontSize: 'var(--fontSize, 13px)',
    color: 'var(--color)',

    // Box/Border properties
    boxShadow: '0px 1px 5px -1px rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    borderRadius: '2px',

    // Background properties
    backgroundSize: '16px',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'none',
    backgroundColor: 'var(--bg)',

    // Sizing properties
    lineHeight: 1.25, // TODO: this should be calculated instead of hard coded
    width: 'auto',
    minWidth: 'calc(var(--fontSize, 13px) * 6)',
    height: 'var(--size, 32px)',
    whiteSpace: 'nowrap',

    // Spacing properties
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingRight: '16px',
    paddingLeft: '16px',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,

    // Mouse properties
    WebkitAppRegion: 'no-drag',
    cursor: 'pointer',
    userSelect: 'none',

    // Transition properties
    transition: '.1s opacity, .1s background',

    ':hover': {
      color: 'var(--hoverColor)'
    },

    ':active': {
      // push the button down when active
      bottom: '-1px'
    }
  },

  browserButton_disabled: {
    pointerEvents: 'none',
    animation: 'none',
    opacity: 0.25
  },

  browserButton_primaryColor: {
    background: 'var(--primary-bg)',
    borderLeft: '2px solid transparent',
    borderRight: '2px solid transparent',
    borderTop: '2px solid var(--primary-gradient1)',
    borderBottom: '2px solid var(--primary-gradient2)',
    color: 'var(--primary-color)',

    ':hover': {
      border: '2px solid var(--primary-borderHoverColor)',
      color: 'var(--primary-hoverColor)'
    }
  },

  browserButton_secondaryColor: {
    background: 'var(--secondary-bg)',
    border: '1px solid white',
    color: 'var(--secondary-color)',

    ':hover': {
      border: '1px solid var(--secondary-borderHoverColor)',
      color: 'var(--secondary-hoverColor)'
    }
  }
});

exports.default = BrowserButton;
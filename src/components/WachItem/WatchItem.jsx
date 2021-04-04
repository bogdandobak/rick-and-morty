/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import cN from 'classnames';

export const WatchItem = ({ item, onRemove, onComplete }) => (
  <li className={cN('watch-list__item', {
    'watch-list__item--completed': item.completed,
  })}
  >
    <div>
      <input
        type="checkbox"
        readOnly
        className="watch-list__toggle"
        checked={item.completed}
        onClick={() => onComplete(item.id)}
      />
      <span className="watch-list__title">
        {item.title}
      </span>
      <button
        type="button"
        className="watch-list__destroy"
        onClick={() => onRemove(item.id)}
      />
    </div>
  </li>
);

WatchItem.propTypes = {
  item: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

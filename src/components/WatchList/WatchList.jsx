import React from 'react';
import PropTypes from 'prop-types';
import { WatchItem } from '../WachItem';
import './WatchList.scss';

export const WatchList = ({
  watchData,
  onRemove,
  onComplete,
}) => (
  <ul className="watch-list">
    {watchData.map((item) => (
      <WatchItem
        key={item.id}
        item={item}
        onComplete={onComplete}
        onRemove={onRemove}
      />
    ))}
  </ul>
);

WatchList.propTypes = {
  watchData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

export const WatchInput = ({ onCreate }) => {
  const [inputQuery, setInputQuery] = useState('');

  const hadnleTitle = useCallback(
    (event) => {
      const { value } = event.target;

      setInputQuery(value);
    }, [],
  );

  const handleSubmit = useCallback(
    (event) => {
      if (event.key === 'Enter' && inputQuery) {
        onCreate(inputQuery);
        setInputQuery('');
      }
    }, [inputQuery],
  );

  return (
    <div className="watch__header">
      <h1 className="watch__title">
        My Watch List
      </h1>
      <Input
        size="huge"
        type="text"
        placeholder="What to see next?"
        value={inputQuery}
        onChange={hadnleTitle}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

WatchInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

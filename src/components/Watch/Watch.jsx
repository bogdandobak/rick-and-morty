import React, { useCallback } from 'react';
import { Route } from 'react-router-hoc';
import uniqid from 'uniqid';
import { useLocalStorage } from '../../helpers';
import { WatchInput } from '../WatchInput';
import { WatchList } from '../WatchList';
import '../HomePage/HomePage.scss';
import './Watch.scss';

const WatchRoute = Route({
  list: Route.params.enum('watch'),
}, ({ list }) => `/${list}`);

export const Watch = WatchRoute(() => {
  const [watchData, setWatchData] = useLocalStorage('watchData', []);

  const onCreate = useCallback(
    (title) => {
      setWatchData((prevWatchData) => [...prevWatchData, {
        completed: false,
        title,
        id: uniqid(),
      }]);
    },
  );

  const onComplete = useCallback(
    (id) => {
      const newWatchData = watchData.map((item) => (item.id === id ? ({
        ...item,
        completed: !item.completed,
      })
        : item));

      setWatchData(newWatchData);
    }, [watchData],
  );

  const onRemove = useCallback(
    (id) => {
      const newWatchData = watchData.filter((item) => item.id !== id);

      setWatchData(newWatchData);
    }, [watchData],
  );

  return (
    <section className="watch">
      <WatchInput onCreate={onCreate} />
      <WatchList
        watchData={watchData}
        onComplete={onComplete}
        onRemove={onRemove}
      />
    </section>
  );
});

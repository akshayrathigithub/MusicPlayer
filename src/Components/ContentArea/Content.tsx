import React, { ReactElement, useEffect, useState } from 'react';
import SearchInput from '../../SharedComponents/SearchInput/SearchInput';
import './Content.scss';

const Content: React.FC = () => {
  const initialState = {
    list: [
      'yellow',
      'green',
      'palevioletred',
      'purple',
      'orange',
      'red',
      'blue',
      'pink',
      'white',
    ],
    activeIndex: 4,
    middleIndex: 5,
    totalLength: 8,
  };
  const classList: string[] = [
    'third-right',
    'second-right',
    'center',
    'second-left',
    'third-left',
  ];
  const [contentState, setContentState] = useState(initialState);
  useEffect(() => {
    const updatedState = contentState;
    const middleIndex = Number(updatedState.list.length / 2 - 0.5);
    updatedState.middleIndex = middleIndex;
    updatedState.activeIndex = middleIndex;
    updatedState.totalLength = updatedState.list.length;
    setContentState({ ...updatedState });
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div className="content-wrapper">
      <div className="searchable-input">
        <SearchInput />
      </div>
      <div className="main-slider">
        {contentState.list.map((x, index) => {
          let reactElement: ReactElement = <></>;
          if (index === 0) {
            reactElement = (
              <div
                className={`${classList[2]}`}
                style={{
                  backgroundColor: `${
                    contentState.list[contentState.activeIndex]
                  }`,
                }}
              ></div>
            );
          } else {
            if (contentState.activeIndex - index >= 0) {
              reactElement = (
                <div
                  className={
                    index > 2 ? 'third-left' : `${classList[2 + index]}`
                  }
                  style={{
                    backgroundColor: `${
                      contentState.list[contentState.activeIndex + index]
                    }`,
                  }}
                ></div>
              );
            }
            if (contentState.activeIndex + index < contentState.totalLength) {
              reactElement = (
                <div
                  className={
                    index > 2 ? 'third-right' : `${classList[2 - index]}`
                  }
                  style={{
                    backgroundColor: `${
                      contentState.list[contentState.activeIndex - index]
                    }`,
                  }}
                ></div>
              );
            }
          }
          return <React.Fragment key={index}>{reactElement}</React.Fragment>;
        })}
      </div>
      <button
        onClick={() =>
          setContentState({
            ...contentState,
            activeIndex: contentState.activeIndex - 1,
          })
        }
      >
        Left
      </button>
      <button
        onClick={() =>
          setContentState({
            ...contentState,
            activeIndex: contentState.activeIndex + 1,
          })
        }
      >
        Right
      </button>
    </div>
  );
};

export default Content;

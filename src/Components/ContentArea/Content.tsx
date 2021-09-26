import React, { useEffect, useRef, useState } from 'react';
import { SLIDER_DIRECTION } from '../../Constants/Enum';
import SearchInput from '../../SharedComponents/SearchInput/SearchInput';
import './Content.scss';
import lodash from 'lodash';
import { SLIDER_TRANSLATE_VALUES as translateValues } from '../../Constants/Constant';
import {
  ContentRefType,
  ContentState,
  ElementStyles,
} from './Content.interface';

const Content: React.FC = () => {
  const initialState: ContentState = {
    list: [
      '#051e3e',
      ' #35a79c',
      '#59575f',
      ' #83d0c9',
      '#451e3e',
      ' #009688',
      ' #651e3e',
      '#055742',
      ' #9a0ea7',
      ' #3da4ab',
      ' #f6cd61',
      ' #fe8a71',
      '#2a4d69 ',
      ' #4b86b4',
      ' #54b2a9',
      ' #adcbe3',
      ' #65c3ba',
      ' #e7eff6',
      ' #63ace5',
      ' #851e3e',
    ],
    totalLength: 8,
    leafList: [],
  };

  const [contentState, setContentState] = useState<ContentState>(initialState);
  const contentRef = useRef<ContentRefType>({
    activeIndex: 3,
    elementList: [],
  });
  useEffect(() => {
    const updatedState = contentState;
    let listTotalLength = 0;
    /**
     * populating slide leaf with center leaf as active
     * middle index is active by default
     */
    const isEvenLengthList = updatedState.list.length % 2 === 0;
    if (isEvenLengthList) {
      listTotalLength = updatedState.list.length + 1;
    } else {
      listTotalLength = updatedState.list.length;
    }
    const middleIndex = Math.round(listTotalLength / 2 - 0.5);
    updatedState.totalLength = updatedState.list.length;
    contentRef.current.activeIndex = middleIndex;
    for (let i = middleIndex; i < listTotalLength; i++) {
      const zIndex = (listTotalLength - i).toString();
      if (i === middleIndex) {
        /**
         * central leaf
         */

        updatedState.leafList.push({
          zIndex: zIndex,
          bgColor: updatedState.list[i],
          translateValue: translateValues.center.transform,
          width: translateValues.center.width,
          height: translateValues.center.height,
        });
      } else {
        let translateValue = '';
        let width = '';
        let height = '';

        if (i === middleIndex + 1) {
          translateValue = translateValues.secondLeft.transform;
          width = translateValues.secondLeft.width;
          height = translateValues.secondLeft.height;
        } else if (i === middleIndex + 2) {
          translateValue = translateValues.thirdLeft.transform;
          width = translateValues.thirdLeft.width;
          height = translateValues.thirdLeft.height;
        } else {
          translateValue = translateValues.thirdLeft.transform;
          width = translateValues.thirdLeft.width;
          height = translateValues.thirdLeft.height;
        }

        /**
         * push to front
         */

        updatedState.leafList.unshift({
          zIndex: zIndex,
          bgColor: updatedState.list[listTotalLength - 1 - i],
          translateValue: translateValue,
          width: width,
          height: height,
        });

        if (isEvenLengthList && i === listTotalLength - 1) {
          /**
           * when slides count is even,
           * then we need to skip one leaf
           */
          break;
        }

        if (i === middleIndex + 1) {
          translateValue = translateValues.secondRight.transform;
          width = translateValues.secondRight.width;
          height = translateValues.secondRight.height;
        } else if (i === middleIndex + 2) {
          translateValue = translateValues.thirdRight.transform;
          width = translateValues.thirdRight.width;
          height = translateValues.thirdRight.height;
        } else {
          translateValue = translateValues.thirdRight.transform;
          width = translateValues.thirdRight.width;
          height = translateValues.thirdRight.height;
        }

        /**
         * push to end
         */

        updatedState.leafList.push({
          zIndex: zIndex,
          bgColor: updatedState.list[i],
          translateValue: translateValue,
          width: width,
          height: height,
        });
      }
    }
    setContentState({ ...updatedState });
    return () => {
      // cleanup
    };
  }, []);

  const slidePhoto = (direction: SLIDER_DIRECTION) => {
    /**
     * changing translate3d value based on click direction of slider
     */

    const updatedContentRef = lodash.cloneDeep(contentRef); // deepClone
    const activeIndex = updatedContentRef.current.activeIndex;

    /**
     * for right direction access array from starting and
     * for left direction access array from end
     */

    const beforCenter =
      direction === SLIDER_DIRECTION.RIGHT ? activeIndex - 2 : activeIndex + 2;
    const afterCenter =
      direction === SLIDER_DIRECTION.RIGHT ? activeIndex - 1 : activeIndex + 1;
    const nextAfterCenter =
      direction === SLIDER_DIRECTION.RIGHT ? activeIndex + 1 : activeIndex - 1;

    /**
     * changing width and zIndex of leafs
     */

    for (let divIndex = 0; divIndex < contentState.totalLength; divIndex++) {
      const currIndex =
        direction === SLIDER_DIRECTION.RIGHT
          ? divIndex
          : contentState.totalLength - 1 - divIndex;

      const divTag = updatedContentRef.current.elementList[currIndex];

      let updatedElementStyleValues: ElementStyles = {
        transform: divTag ? divTag.style.transform : '',
        height: divTag ? divTag.style.height : '',
        width: divTag ? divTag.style.width : '',
        zIndex: divTag ? divTag.style.zIndex : '',
      };

      if (divIndex > activeIndex) {
        updatedElementStyleValues.zIndex = (
          contentState.totalLength +
          activeIndex -
          divIndex
        ).toString();
      } else {
        updatedElementStyleValues.zIndex = (
          contentState.totalLength -
          activeIndex +
          divIndex
        ).toString();
      }

      if (currIndex === beforCenter) {
        updatedElementStyleValues = {
          ...updatedElementStyleValues,
          transform:
            direction === SLIDER_DIRECTION.RIGHT
              ? translateValues.secondLeft.transform
              : translateValues.secondRight.transform,
          height:
            direction === SLIDER_DIRECTION.RIGHT
              ? translateValues.secondLeft.height
              : translateValues.secondRight.height,
          width:
            direction === SLIDER_DIRECTION.RIGHT
              ? translateValues.secondLeft.width
              : translateValues.secondRight.width,
          zIndex: '98',
        };
      } else if (currIndex === afterCenter) {
        updatedElementStyleValues = {
          ...updatedElementStyleValues,
          transform: translateValues.center.transform,
          height: translateValues.center.height,
          width: translateValues.center.width,
          zIndex: '100',
        };
      } else if (currIndex === activeIndex) {
        updatedElementStyleValues = {
          ...updatedElementStyleValues,
          transform:
            direction === SLIDER_DIRECTION.RIGHT
              ? translateValues.secondRight.transform
              : translateValues.secondLeft.transform,
          height:
            direction === SLIDER_DIRECTION.RIGHT
              ? translateValues.secondRight.height
              : translateValues.secondLeft.height,
          width:
            direction === SLIDER_DIRECTION.RIGHT
              ? translateValues.secondRight.width
              : translateValues.secondLeft.width,
          zIndex: '98',
        };
      } else if (currIndex === nextAfterCenter) {
        updatedElementStyleValues = {
          ...updatedElementStyleValues,
          transform:
            direction === SLIDER_DIRECTION.RIGHT
              ? translateValues.thirdRight.transform
              : translateValues.thirdLeft.transform,
          height:
            direction === SLIDER_DIRECTION.RIGHT
              ? translateValues.thirdRight.height
              : translateValues.thirdLeft.height,
          width:
            direction === SLIDER_DIRECTION.RIGHT
              ? translateValues.thirdRight.width
              : translateValues.thirdLeft.width,
          zIndex: '96',
        };
      }

      /**
       * updating styles of leaf's
       */

      if (divTag) {
        divTag.style.transform = updatedElementStyleValues.transform;
        divTag.style.height = updatedElementStyleValues.height;
        divTag.style.width = updatedElementStyleValues.width;
        divTag.style.zIndex = updatedElementStyleValues.zIndex;
      }
      updatedContentRef.current.elementList[currIndex] = divTag;
    }

    if (direction === SLIDER_DIRECTION.LEFT) {
      updatedContentRef.current.activeIndex += 1;
    } else {
      updatedContentRef.current.activeIndex -= 1;
    }

    contentRef.current = lodash.cloneDeep(updatedContentRef.current);
  };

  return (
    <div className="content-wrapper">
      <div className="searchable-input">
        <SearchInput />
      </div>
      <div className="main-slider">
        {contentState.leafList.map((x, index) => {
          return (
            <div
              className="slide-leaf"
              style={{
                backgroundColor: `${x.bgColor}`,
                transform: `${x.translateValue}`,
                zIndex: Number(x.zIndex),
                width: x.width,
                height: x.height,
              }}
              ref={(divInfo) => {
                contentRef.current.elementList[index] =
                  divInfo as HTMLDivElement;
              }}
              key={index}
            ></div>
          );
        })}
      </div>
      <button onClick={() => slidePhoto(SLIDER_DIRECTION.LEFT)}>Left</button>
      <button onClick={() => slidePhoto(SLIDER_DIRECTION.RIGHT)}>Right</button>
      <div className="featured-list">
        <div className="heading">Weekly Top Tracks</div>
        <div className="list-wrapper">
          <div className="card-outer">
            <div className="img"></div>
            <div className="details">
              <div className="head">Lean On</div>
              <div className="sub-head">Ed Sheeran</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

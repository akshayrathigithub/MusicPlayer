import { useState } from 'react';
import SearchInput from '../../SharedComponents/SearchInput/SearchInput';
import './Content.scss';

const Content: React.FC = () => {
  const [flag, setflag] = useState(false);
  return (
    <div className="content-wrapper">
      <div className="searchable-input">
        <SearchInput />
      </div>
      <div className="main-slider">
        <div className="third-left" style={{ backgroundColor: 'yellow' }}></div>
        <div
          className={`third-right ${flag ? 'new-second-right' : ''}`}
          style={{ backgroundColor: 'green' }}
        ></div>
        <div
          className={`second-left ${flag ? 'new-second-left' : ''}`}
          style={{ backgroundColor: 'palevioletred' }}
        ></div>
        <div
          className={`second-right ${flag ? 'new-second-right' : ''}`}
          style={{ backgroundColor: 'purple' }}
        ></div>
        <div
          className={`center ${flag ? 'center-left' : ''}`}
          style={{ backgroundColor: 'orange' }}
        ></div>
      </div>
      <button onClick={() => setflag(!flag)}>hello</button>
    </div>
  );
};

export default Content;

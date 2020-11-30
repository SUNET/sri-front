import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import '../style/ExtensibleTextBox.scss';

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
const ExpansibleTextBox = ({ text, visible, onClick }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  return (
    <div className="extensible-text-box" ref={ref}>
      <>
        <div
          className={`extensible-text-box__cta`}
          onClick={() => {
            setIsComponentVisible(true);
          }}
        >
          <FontAwesomeIcon icon={faEye} />
        </div>
        {isComponentVisible && (
          <div className="extensible-text-box__all-text">
            <div className="extensible-text-box__all-text__content">{text}</div>
          </div>
        )}
      </>
    </div>
  );
};

export default ExpansibleTextBox;

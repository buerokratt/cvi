import React, { FC, useEffect } from 'react';
import { Step } from './type';
import './Steps.scss';

interface Header {
  steps: Step[];
  activeStepIndex: number;
  select: (index: number) => void;
}

const Header: FC<Header> = ({
  steps,
  activeStepIndex,
  select,
}) => {

  useEffect(() => {
    const anyStepSelected = activeStepIndex !== null;
    const currentProgressCSSVar = anyStepSelected ? (activeStepIndex / (steps.length - 1)) * 100 : 0;

    document.documentElement?.style.setProperty(
      `--progress`,
      anyStepSelected ? currentProgressCSSVar + '%' : '100%'
    );
  }, [activeStepIndex, steps]);

  return (
    <ol className="cvi-steps__list">
      {steps.map((step: any, i: number) => (
        <li
          key={i}
          className={`cvi-steps__list-item ${activeStepIndex !== null && i <= activeStepIndex ? 'is-past' : ''} ${i === activeStepIndex ? 'is-current' : ''}`}
          data-attribute={`cvi-steps__list-item_${i}`}
        >
          <button className="cvi-steps__list-item-button" onClick={() => select(i)}
            data-attribute={`cvi-steps__list-item-button_${i}`}
          >
            <div className="cvi-steps__list-item-inner">
              <span className="cvi-steps__list-item-title">{step.title}</span>
              <div className="cvi-steps__list-item-arrow-icon-wrapper">
                <span className="cvi-steps__list-item-arrow-icon">▶</span>
              </div>
            </div>
          </button>
        </li>
      ))}
    </ol>
  );
}

export default Header;

import React, { forwardRef, PropsWithChildren } from 'react';

import './section.scss';

const HtmlSectionComponent = forwardRef<HTMLElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <section ref={ref} className="section">
        {children}
      </section>
    );
  }
);

export default HtmlSectionComponent;

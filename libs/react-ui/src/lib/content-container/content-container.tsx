import React, { forwardRef, PropsWithChildren } from 'react';

const ContentContainerComponent = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="cvi-content-container">
        {children}
      </div>
    );
  }
);

export default ContentContainerComponent;

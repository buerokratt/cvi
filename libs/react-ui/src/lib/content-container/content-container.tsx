import React, { FC, PropsWithChildren } from 'react';

type ContentContainerProps = {
  content?: string;
};

const ContentContainerComponent: FC<
  PropsWithChildren<ContentContainerProps>
> = ({ content }) => {
  return <div className="cvi-content-container">{content}</div>;
};

export default ContentContainerComponent;

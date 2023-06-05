import React, { FC, PropsWithChildren } from 'react';

type StatusBadgeProps = {
  content?: string;
};

const StatusBadgeComponent: FC<PropsWithChildren<StatusBadgeProps>> = ({
  content,
}) => {
  return (
    <span
      className="cvi-status-badge"
      style={{
        color: '#005aa3',
        backgroundColor: '#e7f0f6',
        border: '2px solid #005aa3',
      }}
    >
      {content}
    </span>
  );
};

export default StatusBadgeComponent;

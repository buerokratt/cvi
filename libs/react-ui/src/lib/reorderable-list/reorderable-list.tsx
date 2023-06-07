import React, { FC, PropsWithChildren } from 'react';

type StatusBadgeProps = {
  content?: string;
};

const ReorderableListComponent: FC<PropsWithChildren<StatusBadgeProps>> = ({
  content,
}) => {
  return (
    <ol>
      <li>
        <label>Test</label>
      </li>
    </ol>
  );
};

export default ReorderableListComponent;

import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  StyleHTMLAttributes,
} from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import clsx from 'clsx';

import '../icon.scss';
import { MdOutlineSend } from 'react-icons/md';

type LabelIconProps = StyleHTMLAttributes<CSSProperties> & {
  label?: string | null;
  iconLabel?: string | null;
  icon: ReactNode;
  size?: 'small' | 'medium';
};

const LabeledIconComponent = forwardRef<HTMLSpanElement, LabelIconProps>(
  ({ label, icon, iconLabel, size = 'small', ...rest }, ref) => {
    const iconClasses = clsx('icon', `icon--${size}`);

    return (
      <div>
        <AccessibleIcon.Root label={label ?? ''}>
          <span ref={ref} className={iconClasses} style={rest.style}>
            {/* {icon} */}
            {<MdOutlineSend fontSize={18} />}
          </span>
        </AccessibleIcon.Root>
      </div>
    );
  }
);

export default LabeledIconComponent;

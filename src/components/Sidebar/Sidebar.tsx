import React from 'react';
import cc from 'classcat';
import css from './Sidebar.scss';
import { WindowUtils } from '../../utils/WindowUtils';

interface Props {
  open: boolean;
  closeSidebar: (open: boolean) => void;
}

export class Sidebar extends React.PureComponent<Props> {
  public render() {
    const { children, open } = this.props;
    return (
      <div className={cc({ [css.Sidebar]: true, [css.Open]: open })} onTouchMove={WindowUtils.preventDefault}>
        <div className={css.Dim} onClick={this.onClickDimmed} />
        <div className={css.Content}>{children}</div>
      </div>
    );
  }

  private onClickDimmed = () => {
    this.props.closeSidebar(false);
  };
}

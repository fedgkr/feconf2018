import React from 'react';
import cc from 'classcat';
import css from './Sidebar.scss';
import { WindowUtils } from '../../utils/WindowUtils';

interface SidebarProps {
  open: boolean;
  closeSidebar: (open: boolean) => void;
}

interface SidebarState {}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {
  constructor(props) {
    super(props);
    this.onDimClick = this.onDimClick.bind(this);
  }

  public render() {
    const { children, open } = this.props;
    return (
      <div className={cc({ [css.Sidebar]: true, [css.Open]: open })}>
        <div className={css.Dim} onClick={this.onDimClick} onTouchStart={WindowUtils.preventDefault} />
        <div className={css.Content}>{children}</div>
      </div>
    );
  }

  private onDimClick() {
    this.props.closeSidebar(false);
  }
}

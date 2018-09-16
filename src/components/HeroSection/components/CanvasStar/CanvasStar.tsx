import React from 'react'
import css from './CanvasStar.scss'

interface Props {
}

interface State {
}

export class CanvasStar extends React.Component<Props, State> {
  private ctx: CanvasRenderingContext2D
  private canvasEl: HTMLCanvasElement

  public componentDidMount() {
    this.renderStar()
  }

  public shouldComponentUpdate() {
    return false
  }

  public render() {
    return (
      <canvas
        ref={el => (this.canvasEl = el)}
        className={css.CanvasStar}
      />
    )
  }

  private renderStar() {
    this.ctx = this.canvasEl.getContext('2d')
    this.ctx.beginPath()
  }
}

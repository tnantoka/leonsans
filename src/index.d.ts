declare class Dispatcher {
  public on<TData = any>(event: string, callback: (TData) => void): void;
  public off<TData = any>(event: string, callback: (TData) => void): void;
  public dispatch<TData = any>(event: string, data: TData): void;
}

export default class LeonSans extends Dispatcher {
  public text: string;
  public size: number;
  public weight: number;
  public color: string[];
  public tracking: number;
  public leading: number;
  public align: 'left' | 'center' | 'right';
  public pathGap: number;
  public amplitude: number;
  public width: number;
  public breakWord: boolean;
  public fps: number;
  public isPath: boolean;
  public isWave: boolean;
  public readonly linkeWidth: number;
  public readonly scale: number;
  // TODO: improve these types.
  public readonly data: Array<object>;
  public readonly paths: Array<object>;
  public readonly drawingPaths: Array<object>;
  public readonly wavePaths: Array<object>;

  public position(x: number, y: number): void;
  public update(): void;
  public updateDrawingPaths(): void;
  public updatePatternPaths(force: boolean): void;
  public updateWavePaths(force: boolean): void;
  public reset(): void;
  public dispose(): void;
  public draw(ctx: CanvasRenderingContext2D): void;
  public drawColorful(ctx: CanvasRenderingContext2D): void;
  public wave(ctx: CanvasRenderingContext2D, t: DOMHighResTimeStamp): void;
  public pattern(
    ctx: CanvasRenderingContext2D,
    w: number,
    height: number,
  ): void;
  public grid(ctx: CanvasRenderingContext2D): void;
  public point(ctx: CanvasRenderingContext2D): void;
}

import { IApplicationContainer, IContainerBindParam, IContainerGetParam } from './main-interface';

export class Container implements IApplicationContainer {
  public constructor(private readonly containerProvider: IApplicationContainer) {}

  public bind<T>(param: IContainerBindParam<T>): void {
    this.containerProvider.bind<T>(param);
  }

  public singleton<T>(param: IContainerBindParam<T>): void {
    this.containerProvider.singleton<T>(param);
  }

  public get<T>(param: IContainerGetParam<T>): T {
    return this.containerProvider.get<T>(param);
  }
}

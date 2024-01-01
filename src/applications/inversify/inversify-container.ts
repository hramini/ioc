import { Container } from 'inversify';
import {
  IApplicationContainer,
  IContainerBindParam,
  IContainerGetParam,
} from '../../main/main-interface';
import { InversifyContainerHandler } from './inversify-container-handler';

export class InversifyContainer implements IApplicationContainer {
  private container: Container;

  public constructor() {
    this.container = InversifyContainerHandler.getInstance();
  }

  public bind<T>({ key, Provider }: IContainerBindParam<T>): void {
    this.container.bind<T>(key).to(Provider);
  }

  public singleton<T>({ key, Provider }: IContainerBindParam<T>): void {
    this.container.bind<T>(key).to(Provider).inSingletonScope();
  }

  public get<T>({ key }: IContainerGetParam<T>): T {
    return this.container.get<T>(key);
  }
}

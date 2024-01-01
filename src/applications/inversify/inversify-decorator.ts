import { Container, inject as inversifyInject, injectable as inversifyInjectable } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import { IApplicationContainerDecorator } from '../../main/main-interface';
import {
  InjectableReturnType,
  InjectIdentifier,
  InjectReturnType,
  LazyInjectReturnType,
} from '../../main/main-type';
import { InversifyContainerHandler } from './inversify-container-handler';

export class InversifyDecorator implements IApplicationContainerDecorator {
  private container: Container;

  public constructor() {
    this.container = InversifyContainerHandler.getInstance();
  }

  public lazyInject(param: InjectIdentifier<any>): LazyInjectReturnType {
    const { lazyInject } = getDecorators(this.container);

    return lazyInject(param);
  }

  public inject(identifier: InjectIdentifier<any>): InjectReturnType {
    return inversifyInject(identifier);
  }

  public injectable(): InjectableReturnType {
    return inversifyInjectable();
  }
}

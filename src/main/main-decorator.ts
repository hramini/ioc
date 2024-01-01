import { InversifyDecorator } from '../applications/inversify/inversify-decorator';
import { IApplicationContainerDecorator } from './main-interface';
import {
  InjectableReturnType,
  InjectIdentifier,
  InjectReturnType,
  LazyInjectReturnType,
} from './main-type';

export class Ioc {
  private static decorator: IApplicationContainerDecorator = new InversifyDecorator();

  public static inject(identifier: InjectIdentifier<any>): InjectReturnType {
    return this.decorator.inject(identifier);
  }

  public static lazyInject(identifier: InjectIdentifier<any>): LazyInjectReturnType {
    return this.decorator.lazyInject(identifier);
  }

  public static injectable(): InjectableReturnType {
    return this.decorator.injectable();
  }
}

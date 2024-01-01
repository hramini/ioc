import {
  InjectableReturnType,
  InjectIdentifier,
  InjectReturnType,
  LazyInjectReturnType,
} from './main-type';

export interface IConstructor<T> {
  new (...args: any[]): T;
}

export interface IContainerBindParam<T> {
  readonly key: string;
  readonly Provider: IConstructor<T>;
  readonly deps?: any[];
}

export interface IContainerGetParam<T> {
  readonly key: string | IConstructor<T>;
  readonly args?: any[];
}

export interface IApplicationContainer {
  bind<T>(param: IContainerBindParam<T>): void;
  singleton<T>(param: IContainerBindParam<T>): void;
  get<T>(param: IContainerGetParam<T>): T;
}

export interface IApplicationContainerDecorator {
  inject(identifier: InjectIdentifier<any>): InjectReturnType;
  lazyInject(identifier: InjectIdentifier<any>): LazyInjectReturnType;
  injectable(): InjectableReturnType;
}

import { IConstructor } from './main-interface';

export type ProviderKey = string | symbol;

export type InjectIdentifier<T = any> = IConstructor<T> | ProviderKey;

export type InjectReturnType = (target: any, targetKey: string, index: number) => void;

export type LazyInjectReturnType = (target: any, targetKey: string) => void;

export type InjectableReturnType = (target: any) => any;

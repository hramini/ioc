import { Container } from 'inversify';

export class InversifyContainerHandler extends Container {
  private static instance: InversifyContainerHandler;

  private constructor() {
    super();
  }

  public static getInstance(): InversifyContainerHandler {
    if (!InversifyContainerHandler.instance) {
      InversifyContainerHandler.instance = new InversifyContainerHandler();
    }

    return InversifyContainerHandler.instance;
  }
}

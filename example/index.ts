/* eslint-disable max-classes-per-file */
import 'reflect-metadata';
import { InversifyContainer } from '../src/applications/inversify/inversify-container';
import { Container, Ioc } from '../src/main-expose';

interface IExample {
  getText(): string;
  setText(text: string): void;
}

class Name {
  @Ioc.lazyInject('KEY')
  private example: IExample;

  public getText(): string {
    return this.example.getText();
  }
}

@Ioc.injectable()
class TITLE implements IExample {
  private text: string;

  public constructor() {
    this.text = 'default text';
  }

  public getText(): string {
    return this.text;
  }

  public setText(text: string): void {
    this.text = text;
  }
}

const container = new Container(new InversifyContainer());

// switch between the bind method and the singleton method to see the differences;

// container.bind<IExample>({ key: Example.NAME, Provider: TITLE });
container.singleton<IExample>({ key: 'KEY', Provider: TITLE });

const title = container.get<IExample>({ key: 'KEY' });

title.setText('hello');

const name = new Name();

console.log(name.getText());

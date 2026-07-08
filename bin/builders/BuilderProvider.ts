import BaseBuilder from './BaseBuilder';
import MacBuilder from './MacBuilder';
import WinBuilder from './WinBuilder';
import LinuxBuilder from './LinuxBuilder';
import { NextBitDeskifyAppOptions } from '@/types';

const { platform } = process;

const buildersMap: Record<
  string,
  new (options: NextBitDeskifyAppOptions) => BaseBuilder
> = {
  darwin: MacBuilder,
  win32: WinBuilder,
  linux: LinuxBuilder,
};

export default class BuilderProvider {
  static create(options: NextBitDeskifyAppOptions): BaseBuilder {
    const Builder = buildersMap[platform];
    if (!Builder) {
      throw new Error('The current system is not supported!');
    }
    return new Builder(options);
  }
}

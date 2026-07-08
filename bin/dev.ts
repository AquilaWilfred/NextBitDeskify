import log from 'loglevel';
import { NextBitDeskifyCliOptions } from './types';
import handleInputOptions from './options/index';
import BuilderProvider from './builders/BuilderProvider';
import { getCliProgram } from './helpers/cli-program';

const program = getCliProgram();

program.action(async (url: string, options: NextBitDeskifyCliOptions) => {
  if (!url) {
    program.help({
      error: false,
    });
    return;
  }

  log.setDefaultLevel('debug');

  const appOptions = await handleInputOptions(options, url);
  log.debug('NextBitDeskifyAppOptions', appOptions);

  const builder = BuilderProvider.create(appOptions);
  await builder.prepare();
  await builder.start(url);
});

program.parse();

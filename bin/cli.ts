import log from 'loglevel';
import chalk from 'chalk';
import updateNotifier from 'update-notifier';
import packageJson from '../package.json';
import BuilderProvider from './builders/BuilderProvider';
import handleInputOptions from './options/index';
import { getCliProgram } from './helpers/cli-program';
import { isNextBitDeskifyError } from './utils/error';
import { NextBitDeskifyCliOptions } from './types';

function printBanner() {
  const navy = chalk.hex('#0055FF');
  const cyan = chalk.hex('#00F2FF');

  const art = [
    ' _   _           _   ____  _ _   ____            _    _  __       ',
    '| \\ | | _____  _| |_| __ )(_) |_|  _ \\  ___  ___| | _(_)/ _|_   _ ',
    '|  \\| |/ _ \\ \\/ / __|  _ \\| | __| | | |/ _ \\/ __| |/ / | |_| | | |',
    '| |\\  |  __/>  <| |_| |_) | | |_| |_| |  __/\\__ \\   <| |  _| |_| |',
    '|_| \\_|\\___/_/\\_\\\\__|____/|_|\\__|____/ \\___||___/_|\\_\\_|_|  \\__, |',
    '                                                            |___/ ',
  ];

  console.log();
  art.forEach((line) => console.log(navy(line)));
  console.log(cyan(`  NextBitDeskify CLI  •  v${packageJson.version}`));
  console.log(chalk.gray(`  https://github.com/AquilaWilfred/nextbitdeskify\n`));
}

const program = getCliProgram();

async function checkUpdateTips() {
  updateNotifier({ pkg: packageJson, updateCheckInterval: 1000 * 60 }).notify({
    isGlobal: true,
  });
}

program.action(async (url: string, options: NextBitDeskifyCliOptions) => {
  try {
    await checkUpdateTips();

    if (!url) {
      program.help({
        error: false,
      });
      return;
    }

    log.setDefaultLevel('info');
    log.setLevel('info');
    if (options.debug) {
      log.setLevel('debug');
    }

    const appOptions = await handleInputOptions(options, url);

    const builder = BuilderProvider.create(appOptions);
    await builder.prepare();
    await builder.build(url);
  } catch (error) {
    if (isNextBitDeskifyError(error)) {
      console.error(chalk.red(error.message));
    } else if (error instanceof Error) {
      console.error(chalk.red(`✕ ${error.message}`));
      if (options?.debug && error.stack) {
        console.error(chalk.gray(error.stack));
      }
    } else {
      console.error(chalk.red(`✕ Unexpected error: ${String(error)}`));
    }
    process.exit(1);
  }
});

printBanner();

program.parseAsync().catch((error: unknown) => {
  if (error instanceof Error) {
    console.error(chalk.red(`✕ ${error.message}`));
  } else {
    console.error(chalk.red(`✕ Unexpected error: ${String(error)}`));
  }
  process.exit(1);
});
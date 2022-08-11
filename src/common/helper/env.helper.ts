import { existsSync } from 'fs';
import { resolve } from 'path';
import { NODE_ENV } from '../../config/env.config';

export function getEnvPath(dest: string): string {
  const env: string | undefined = NODE_ENV;
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? `${env}.env` : 'development.env';
  let filePath: string = resolve(`${dest}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
}

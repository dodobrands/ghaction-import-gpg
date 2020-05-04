import * as exec from './exec';

const git = async (args: string[] = []): Promise<string> => {
  return await exec.exec(`git`, args, true).then(res => {
    if (res.stderr != '' && !res.success) {
      throw new Error(res.stderr);
    }
    return res.stdout.trim();
  });
};

export async function enableCommitGpgsign(): Promise<void> {
  await git(['config', 'commit.gpgsign', 'true']);
}

export async function setUserSigningkey(keyid: string): Promise<void> {
  await git(['config', 'user.signingkey', keyid]);
}
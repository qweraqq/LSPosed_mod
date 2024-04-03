import { exec } from 'kernelsu';
import { toast } from 'kernelsu';

async function open_manager() {
    toast('LSPosed_mod Manager starting...');
    const { errno, stdout, stderr } = await exec('am start -c com.google.android.lspmngr.LAUNCH_MANAGER com.android.shell/.BugreportWarningActivity', { cwd: '/system' });
}

open_manager();

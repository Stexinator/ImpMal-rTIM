import { registerDataModels } from './setup/registerDataModels.js';
import { registerSheets } from './setup/registerSheets.js';

Hooks.once('init', () => {
    registerDataModels();
    registerSheets();
});

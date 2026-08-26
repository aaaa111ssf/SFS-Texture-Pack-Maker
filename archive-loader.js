import { Archive } from './vendor/libarchive/libarchive.js';

Archive.init({
    workerUrl: new URL('./vendor/libarchive/worker-bundle.js', import.meta.url).href
});

window.archiveLibraryReady = Promise.resolve(Archive);
window.Archive = Archive;

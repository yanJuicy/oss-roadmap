// Backend
import { internetCollection } from './data/internet.js';
import { basicFrontendCollection } from './data/basic-frontend-knowledge.js';
import { OSCollection } from './data/os-knowledge.js';
import { backendLanguageCollection } from './data/backend-languages.js';
import { databasesCollection } from './data/databases.js';

/**
 * All available collections.
 */
export const collections = [
  // Backend
  internetCollection,
  basicFrontendCollection,
  OSCollection,
  backendLanguageCollection,
  databasesCollection,
];
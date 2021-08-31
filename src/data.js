import { fundamentalsCollection } from './data/fundamentals.js';
import { javascriptCollection } from './data/java-script.js';
import { htmlCollection } from './data/html.js';
import { pwaCollection } from './data/pwa.js';
import { architectureCollection } from './data/architecture-and-paradigmes.js';
import { buildtoolsCollection } from './data/build-tools.js';
import { testingCollection } from './data/testing.js';
import { cssCollection } from './data/css.js';
import { modernCollection } from './data/modern.js';
import { teamCollaborationCollection } from './data/team-collaboration.js';
import { algorithmsCollection } from './data/algorithms.js';
import { designAndUXCollection } from './data/design-and-ux.js';
import { databasesCollection } from './data/databases.js';

// Backend
import { internetCollection } from './data/internet.js';


/**
 * All available collections.
 */
export const collections = [
  fundamentalsCollection,
  htmlCollection, // front-end
  javascriptCollection,
  pwaCollection, 
  buildtoolsCollection,
  cssCollection, // front-end
  testingCollection,
  architectureCollection,
  teamCollaborationCollection,
  designAndUXCollection,
  modernCollection,
  algorithmsCollection,
  databasesCollection,

  // Backend
  internetCollection,

];

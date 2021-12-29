import { KnownLocations } from './known-locations';
import { createElement, render } from './utils';
import { getTemplate as getHeaderTemplate } from './views/header/header';
import { getTemplate as getLogbookTemplate } from './views/log-book/log-book';
import { getTemplate as getPivotTemplate } from './views/pivot/pivot';

const enum LogbookAppMessages {
  CONTAINER_NOT_FOUND = 'LogbookAppMessages.CONTAINER_NOT_FOUND'
}

const templates = {
  [KnownLocations.logbook]: getLogbookTemplate,
  [KnownLocations.pivot]: getPivotTemplate,
};

const main = (container: HTMLElement | null, location: KnownLocations) => {
  if (container === null) {
    throw new Error(LogbookAppMessages.CONTAINER_NOT_FOUND);
  }
  render(container, createElement(getHeaderTemplate()));
  render(container, createElement(templates[location]()));
};

main(document.querySelector('.wrapper'), KnownLocations.pivot);

import { createElement, render } from './utils';
import { getTemplate as getHeaderTemplate } from './views/header/header';
import { getTemplate as getLogbookTemplate } from './views/log-book/log-book';

const enum LogbookAppMessages {
  CONTAINER_NOT_FOUND = 'LogbookAppMessages.CONTAINER_NOT_FOUND'
}

const main = (container: HTMLElement | null) => {
  if (container === null) {
    throw new Error(LogbookAppMessages.CONTAINER_NOT_FOUND);
  }
  render(container, createElement(getHeaderTemplate()));
  render(container, createElement(getLogbookTemplate()));
};

main(document.querySelector('.wrapper'));

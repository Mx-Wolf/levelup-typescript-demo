import { KnownLocations } from './known-locations';
import { render } from './utils';
import { getElement as getHeaderElement } from './views/header/header';
import { getElement as getLogbookElement } from './views/log-book/log-book';
import { getElement as getPivotElement } from './views/pivot/pivot';

const enum LogbookAppMessages {
  CONTAINER_NOT_FOUND = 'LogbookAppMessages.CONTAINER_NOT_FOUND',
  LOCATION_CHANGE_HANDLER_NOT_REGISTERED = 'LogbookAppMessages.LOCATION_CHANGE_HANDLER_NOT_REGISTERED',
}

const factory = {
  [KnownLocations.logbook]: getLogbookElement,
  [KnownLocations.pivot]: getPivotElement,
};

let locationChangeHandler: ((location: KnownLocations) => void) | null = null;
const setLocationChangeHandler = (handler: (location: KnownLocations) => void) => { locationChangeHandler = handler; };
const getLocationChangeHandler = () => {
  if (locationChangeHandler === null) {
    throw new Error(LogbookAppMessages.LOCATION_CHANGE_HANDLER_NOT_REGISTERED);
  }
  return locationChangeHandler;
};


const main = ((container: HTMLElement | null)=>(location: KnownLocations) => {
  if (container === null) {
    throw new Error(LogbookAppMessages.CONTAINER_NOT_FOUND);
  }

  container.innerHTML='';

  render(
    container,
    getHeaderElement({
      locationChangeHandler: getLocationChangeHandler(),
    }),
  );

  render(
    container,
    factory[location](),
  );

})(document.querySelector('.wrapper'));

setLocationChangeHandler((location)=>{
  main(location);
});

main(KnownLocations.logbook);

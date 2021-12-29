import { KnownLocations } from '../../known-locations';
import { createElement, getValueUnderFlag, nearestAnchor } from '../../utils';

export const getTemplate = (current: KnownLocations) => `<header class="header ">
<div class="container header__wrapper">
  <nav class="main-nav">
    <div class="main-nav__wrapper">
      <ul class="main-nav__list">
        <li class="main-nav__item">
          <a href="${KnownLocations.logbook}" class="link    ${getValueUnderFlag(current===KnownLocations.logbook, 'link--active')}">
            <span>Журнал обслуживания</span>
          </a>
        </li>
        <li class="main-nav__item">
          <a href="${KnownLocations.pivot}" class="link    ${getValueUnderFlag(current===KnownLocations.pivot, 'link--active')}">
            <span>Сводная таблица</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="header__terms">
    <a href="#" class="link">
      <svg width="22" height="22">
        <use xlink:href="#icon-info"></use>
      </svg>
      <span>Условия использования</span>
    </a>
  </div>
</div>
</header>`;

export interface HeaderProps {
  locationChangeHandler: (location: KnownLocations) => void;
  current: KnownLocations;
}

export const getElement = (props: HeaderProps) => {
  const { current, locationChangeHandler } = props;
  const element = createElement(getTemplate(current));
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    const target = nearestAnchor(evt.target);
    if (target === null) {
      return;
    }
    const { href } = target;
    switch (true) {
      case href.endsWith(KnownLocations.logbook): {
        locationChangeHandler(KnownLocations.logbook);
        break;
      }
      case href.endsWith(KnownLocations.pivot): {
        locationChangeHandler(KnownLocations.pivot);
        break;
      }
    }
  });
  return element;
};

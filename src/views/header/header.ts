import { KnownLocations } from '../../known-locations';
import { createElement, nearestAnchor } from '../../utils';

export const getTemplate = () => `<header class="header ">
<div class="container header__wrapper">
  <nav class="main-nav">
    <div class="main-nav__wrapper">
      <ul class="main-nav__list">
        <li class="main-nav__item">
          <a href="${KnownLocations.logbook}" class="link    ">
            <span>Журнал обслуживания</span>
          </a>
        </li>
        <li class="main-nav__item">
          <a href="${KnownLocations.pivot}" class="link    link--active">
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
}

export const getElement = (props: HeaderProps) => {
  const { locationChangeHandler } = props;
  const element = createElement(getTemplate());
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

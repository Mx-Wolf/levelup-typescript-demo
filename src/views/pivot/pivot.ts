import { createElement } from '../../utils';

export const getTemplate = () => `<main class="main">
<div class="container">
  <h1 class="title title--page visually-hidden">Сводная таблица</h1>
  <a href="#" class="linkmain__setting-link">
    <svg width="22" height="22">
      <use xlink:href="#icon-settings"></use>
    </svg>
    <span>Настройки сводной таблицы</span>
  </a>
</div>
<div class="table-pivot">
  <div class="table-pivot__values table-pivot__values--left">
    <h2 class="table-pivot__title">Марка</h2>
    <div class="table">
      <table class="table__table">
        <thead class="table__header">
          <tr class="table__row">
            <th class="table__cell table__cell--empty"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Kia</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Volkswagen</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Audi</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Hyundai</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Lada (ВАЗ)</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Mazda</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Honda</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Renault</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Mersedes-Benz</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Mitsubishi</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Nissan</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Toyota</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Skoda</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">BMW</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Ford</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Subaru</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Datsun</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Lexus</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">Chevrolet</td>
          </tr>
          <tr class="table__row table__row--blue">
            <td class="table__cell">УАЗ</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="table-pivot__values table-pivot__values--right">
    <h2 class="table-pivot__title">Пробег</h2>
    <div class="table">
      <table class="table__table">
        <thead class="table__header table__header--blue">
          <tr class="table__row">
            <th class="table__cell">0-10 тыс.км</th>
            <th class="table__cell">10-20 тыс.км</th>
            <th class="table__cell">20-30 тыс.км</th>
            <th class="table__cell">30-40 тыс.км</th>
            <th class="table__cell">40-50 тыс.км</th>
            <th class="table__cell">50-60 тыс.км</th>
            <th class="table__cell">60-70 тыс.км</th>
            <th class="table__cell">70-80 тыс.км</th>
            <th class="table__cell">80-90 тыс.км</th>
            <th class="table__cell">90-100 тыс.км</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
          <tr class="table__row">
            <td class="table__cell">
              <span> 3200 ₽ </span>
            </td>
            <td class="table__cell">
              <span>1000 ₽</span>
            </td>
            <td class="table__cell">
              <span>2000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>100 000 ₽</span>
            </td>
            <td class="table__cell"></td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>98 560 ₽</span>
            </td>
            <td class="table__cell">
              <span>999 999 898 560 ₽</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<div class="container">
  <button class="button button--lighter button--more">
    <span>Загрузить еще (+20)</span>
  </button>
</div>
</main>`;

export const getElement = () => createElement(getTemplate());

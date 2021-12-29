const enum UtilsMessages {
  CANNOT_PARSE_MARKUP_TO_HTML = 'UtilsMessages.CANNOT_PARSE_MARKUP_TO_HTML',
}

const parser = new DOMParser();

export const formatGreetings = (name: string) => `Hello, ${name}`;

export const createElement = (markup: string): Element => {
  const x = parser.parseFromString(markup, 'text/html').firstElementChild;
  if (x === null) {
    throw new Error(UtilsMessages.CANNOT_PARSE_MARKUP_TO_HTML);
  }
  return x;
};

export const render = (container: HTMLElement, content: Node) => {
  container.appendChild(content);
};

export const nearestAnchor = (element: EventTarget | null): HTMLAnchorElement | null => {
  if (element === null) {
    return null;
  }
  const {tagName, parentElement} = element as Element;
  if (tagName === 'A') {
    return element as HTMLAnchorElement;
  }

  return nearestAnchor(parentElement);
};

export const getValueUnderFlag = (flag:boolean, value:string):string => flag?value:'';

const enum UtilsMessages{
  CANNOT_PARSE_MARKUP_TO_HTML = 'UtilsMessages.CANNOT_PARSE_MARKUP_TO_HTML',
}

const parser = new DOMParser();

export const formatGreetings = (name: string) => `Hello, ${name}`;

export const createElement = (markup:string):Node=>{
  const x = parser.parseFromString(markup, 'text/html').firstChild;
  if(x === null){
    throw new Error(UtilsMessages.CANNOT_PARSE_MARKUP_TO_HTML);
  }
  return x;
};

export const render = (container:HTMLElement, content:Node)=>{
  container.appendChild(content);
};

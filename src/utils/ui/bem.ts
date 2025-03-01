/* ---------------------------------------------------------------------------------------
 * about: 样式 BEM 规范计算。参考 vant.js
 * ---------------------------------------------------------------------------------------- */

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];
export type Bem = (el?: Mods, mods?: Mods) => string;

function gen(name: string, mods?: Mods): string {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce((ret, item) => ret + gen(name, item), '');
  }

  return Object.keys(mods).reduce((ret, key) => `${ret}${mods[key] ? gen(name, key) : ''}`, '');
}

/**
 * 创建一个 bem 函数
 * @param name
 */
export function createBEM(name: string): Bem {
  return function bem(el?: Mods, mods?: Mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? `${name}__${el}` : name;

    return `${el}${gen(el, mods)}`;
  };
}

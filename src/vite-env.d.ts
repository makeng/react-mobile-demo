/* Tools */
declare type Obj = Record<PropertyKey, any>;

/* Assets */
declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

/* Pkgs */

/* Expend */
interface Window {
  wx: Obj;
}
declare let wx: Window['wx'];

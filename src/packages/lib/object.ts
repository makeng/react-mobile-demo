export function mapToObject(map: Map<any, any> | any) {
  return Object.fromEntries(map.entries());
}

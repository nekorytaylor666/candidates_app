/*angular does not read json files by defauly, so we need to add that option with code below */
declare module "*.json" {
  const value: any;
  export default value;
}

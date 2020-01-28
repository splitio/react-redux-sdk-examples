/**
 * Note that we are using `localhost` mode for this example.
 * You can replace `authorizationKey` with your api key (browser type).
 * `features` property is only used on `localhost` mode.
 * 
 * @see{@link https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#localhost-mode}
 */
export default {
  core: {
    authorizationKey: 'localhost',
    key: 'customer-key'
  },
  features: {
    'test_split': 'on',
    'test_another_split': 'dark',
    'test_something_else': 'off'
  }
}

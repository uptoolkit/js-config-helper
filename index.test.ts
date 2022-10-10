import {Config} from "./index";

test('Config.get("hello.darkness") to be my old friend', () => {
  const configTest = new Config({
    'hello': {
      'darkness': 'my old friend'
    }
  });

  expect(configTest.get('hello.darkness')).toBe('my old friend');
});

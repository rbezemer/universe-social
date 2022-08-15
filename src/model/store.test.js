import { render, screen } from '@testing-library/react';
import {Store} from './Store';
import {Post} from "./post";

beforeEach(() => {
  fetch.resetMocks();
});

test('registers the route url', () => {
  Store.registerRootUrl('https://blah.com/')
  expect(Store.listUrl('fake')).toEqual('https://blah.com/fakes')
});

test('generates the listUrl', () => {
  Store.registerRootUrl('https://blah.com/')
  expect(Store.listUrl('fake')).toEqual('https://blah.com/fakes')

  expect(Store.listUrl('mod2')).toEqual('https://blah.com/mod2s')

  expect(Store.listUrl('fake', 'extra/')).toEqual('https://blah.com/extra/fakes')
});

test('generates the detail', () => {
  Store.registerRootUrl('https://blah.com/')
  expect(Store.detailUrl('fake', 1)).toEqual('https://blah.com/fakes/1')

  expect(Store.detailUrl('mod2', 2)).toEqual('https://blah.com/mod2s/2')

  expect(Store.detailUrl('fake', 3, 'extra/')).toEqual('https://blah.com/extra/fakes/3')
});

test('find fails when model not registered', () => {
  Store.registerRootUrl('https://blah.com/')
  fetch.mockResponseOnce(JSON.stringify({ id: 1, name: 'something'}));
  const t = () => { Store.find('fake', 1) }
  expect(t).toThrow(TypeError)
  expect(fetch).toHaveBeenCalledTimes(0);
});

test('find returns object when setup correctly', async () => {
  Store.registerRootUrl('https://blah.com/')
  fetch.mockResponseOnce( () => {
    return new Promise( resolve => {
      resolve(new Response(JSON.stringify({ 'id': 1, 'body': 'something'})));
    })
  });
  Store.registerModel('fake', Post)
  const data = await Store.find('fake', 1)
  expect(data.id).toBe(1)
  expect(fetch).toHaveBeenCalledTimes(1);
  //test cache
  const cached_data = await Store.find('fake', 1)
  expect(data.id).toBe(1)
  expect(fetch).toHaveBeenCalledTimes(1);
})

test('findAll returns objects ', async () => {
  Store.registerRootUrl('https://blah.com/')
  fetch.mockResponseOnce( () => {
    return new Promise( resolve => {
      resolve(new Response(JSON.stringify([
        { 'id': 1, 'body': 'some'},
        { 'id': 2, 'body': 'thing'}
      ])));
    })
  });
  Store.registerModel('fake', Post)
  const data = await Store.findAll('fake')
  expect(data.size).toBe(2)
  expect(data.get(1).id).toBe(1)
  expect(data.get(1).body).toBe("some")
  expect(data.get(2).id).toBe(2)
  expect(data.get(2).body).toBe("thing")
  expect(fetch).toHaveBeenCalledTimes(1);
  //test cache
  const cached_data = await Store.findAll('fake')
  expect(cached_data.size).toBe(2)
  expect(cached_data.get(1).id).toBe(1)
  expect(cached_data.get(1).body).toBe("some")
  expect(cached_data.get(2).id).toBe(2)
  expect(cached_data.get(2).body).toBe("thing")
  expect(fetch).toHaveBeenCalledTimes(1);

})


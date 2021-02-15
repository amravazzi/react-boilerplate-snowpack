import Storage from "../../../_snowpack/pkg/store2.js";
export function useLS() {
  function lsGet(key) {
    return Storage.get(key);
  }

  function lsSet(key, value) {
    Storage.set(key, value);
  }

  function lsRemove(key) {
    Storage.remove(key);
  }

  function lsClear() {
    Storage.clear();
  }

  return {
    lsGet,
    lsSet,
    lsRemove,
    lsClear
  };
}
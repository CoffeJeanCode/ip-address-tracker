export const isIpAddress = (possible) =>
  /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/gi.test(possible);

export const isDomain = (possible) =>
  /^(((?!\-))(xn\-\-)?[a-z0-9\-_]{0,61}[a-z0-9]{1,1}\.)*(xn\-\-)?([a-z0-9\-]{1,61}|[a-z0-9\-]{1,30})\.[a-z]{2,}$/.test(
    possible
  );

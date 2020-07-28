export default options => {
  if (!options || !options.url) {
    throw new Error('function ajax: invalid arguments');
  }
  if (typeof options.method !== 'string') options.method = 'get';

  // Initialize
  let request = new XMLHttpRequest();
  request.open(options.method, options.url);
  if (typeof options.timeout === 'number') {
    request.timeout = options.timeout;
  } else {
    request.timeout = 30000;
  }
  if (options.method.toLowerCase() === 'post') {
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }
  if (typeof options.headers === 'object') {
    for (const key in options.headers) {
      request.setRequestHeader(key, options.headers[key]);
    }
  }
  if (typeof options.dataType === 'string') {
    request.responseType = options.dataType;
  }

  // listeners
  request.addEventListener('readystatechange', (e) => {
    if (request.readyState === 4 && request.response) {
      if (request.status < 400) {
        typeof options.success === 'function' && options.success(request.response);
      } else {
        typeof options.error === 'function' && options.error(request.status);
      }
    }
  });
  if (typeof options.error === 'function') {
    request.addEventListener('error', (e) => {
      options.error(e);
    });
    request.addEventListener('timeout', (e) => {
      options.error(e);
    });
  }

  request.send(options.data ? options.data : null);
}
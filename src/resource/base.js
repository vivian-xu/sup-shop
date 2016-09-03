export const dSuccess = (data) => {
  console.log(data);
};
export const dError = (err) => {
  console.log(err);
};
export const dParser = (results) => {
  return results;
};

export function baseFunction ({
  successCallback = dSuccess,
  errorCallback = dError,
  parser = dParser,
  conf,
  that
}) {
  this.$http({
    url: conf.url,
    method: conf.method,
    data: conf.data
  })
  .then((response) => (response.data))
  .then((data) => {
    if (parseInt(data.code) === 0) {
      return data.results;
    } else {
      throw new Error(data.msg);
    }
  })
  .then(parser)
  .then((results) => {
    successCallback(results);
  })
  .catch((err) => {
    console.log(err);
    // errorCallback((err instanceof String) ? err : '出问题啦～');
    errorCallback((err) ? err.toString().substring(6) : '出问题啦～');
  });
};

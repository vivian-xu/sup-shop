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
  conf
}) {
  this.$http({
    url: conf.url,
    method: conf.method,
    data: conf.data
  })
  .then((response) => {
    // console.log(response.status);
    return response.data;
  })
  // .then((data) => {
  //   // if (parseInt(data.code) === 200) {
  //   //   return data.results;
  //   // } else {
  //   //   throw new Error(data.msg);
  //   // }
  //   return data;
  // })
  .then(parser)
  .then((results) => {
    successCallback(results);
  })
  .catch((err) => {
    // console.log(err.status);
    errorCallback(err.status || '');
    // errorCallback((err) ? err.toString().substring(6) : '出问题啦～');
  });
};

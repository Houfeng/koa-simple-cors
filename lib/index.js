module.exports = async function (ctx, next) {
  const { response, request } = ctx;
  const origin = ctx.get('origin');
  if (!origin) return next();
  if (request.method == 'OPTIONS') {
    response.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    response.set('Access-Control-Max-Age', String(86400));
    response.status = 200;
  }
  response.set('Access-Control-Allow-Credentials', 'true');
  response.set('Access-Control-Allow-Headers', 'content-type');
  response.set('Access-Control-Allow-Origin', origin);
  return next();
};
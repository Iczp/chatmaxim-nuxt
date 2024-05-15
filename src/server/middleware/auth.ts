export default defineEventHandler((event) => {
  event.context.auth = { user: 123 };

  console.log('auth', event.context.auth);
});

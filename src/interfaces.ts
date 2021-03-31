/**
 * The end of stream marker. This is sent along the data channel of a Stream
 * to tell consumers that the Stream has ended. See the example map code for
 * an example of detecting the end of a Stream.
 *
 * Note: `nil` is setup as a global where possible. This makes it convenient
 * to access, but more importantly lets Streams from different Highland
 * instances work together and detect end-of-stream properly. This is mostly
 * useful for NPM where you may have many different Highland versions installed.
 *
 * @id nil
 * @section Utils
 * @name nil
 * @api public
 *
 * var map = function (iter, source) {
 *     return source.consume(function (err, val, push, next) {
 *         if (err) {
 *             push(err);
 *             next();
 *         }
 *         else if (val === nil) {
 *             push(null, val);
 *         }
 *         else {
 *             push(null, iter(val));
 *             next();
 *         }
 *     });
 * };
 */
export interface Nil {
  Highland_NIL: Nil;
}
class NilImpl implements Nil {
  Highland_NIL: Nil;
  constructor() {
    this.Highland_NIL = this;
  }
}
export const nil: Nil = new NilImpl();
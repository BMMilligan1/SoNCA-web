let counter = 0;

/**
 * A document-unique id for inline SVG references (clip paths, gradients).
 * Components that render more than once per page need one; a plain literal id
 * would be duplicated.
 */
export function uid(prefix: string): string {
  return `${prefix}-${++counter}`;
}

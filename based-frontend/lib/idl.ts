import idlJson from './idl.json';
import type { BasedProtocol } from '../../target/types/based_protocol';

export { BasedProtocol };
export const IDL = idlJson as BasedProtocol;

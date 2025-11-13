import idlJson from './idl.json';

// Export the IDL directly - it's already in the correct format
export const IDL = idlJson as any;

// Export the program ID from the IDL
export const PROGRAM_ID = idlJson.address;

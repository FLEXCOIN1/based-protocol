const { Connection, PublicKey } = require('@solana/web3.js');

const PROGRAM_ID = new PublicKey('4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd');
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

async function checkState() {
  console.log('=== CHECKING PROTOCOL STATE ===\n');
  
  // Derive state PDA
  const [state] = PublicKey.findProgramAddressSync(
    [Buffer.from('state')],
    PROGRAM_ID
  );
  
  console.log('State PDA:', state.toString());
  
  // Check if it exists
  const stateAccount = await connection.getAccountInfo(state);
  
  if (!stateAccount) {
    console.log('❌ STATE NOT INITIALIZED!');
    console.log('\nYou need to run the initialize instruction first.');
    console.log('This is an ADMIN function that sets up the protocol.\n');
    return;
  }
  
  console.log('✅ State exists!');
  console.log('Owner:', stateAccount.owner.toString());
  console.log('Data length:', stateAccount.data.length, 'bytes');
  console.log('Lamports:', stateAccount.lamports / 1e9, 'SOL\n');
  
  // Check vault
  const [vault] = PublicKey.findProgramAddressSync(
    [Buffer.from('vault')],
    PROGRAM_ID
  );
  
  console.log('Vault PDA:', vault.toString());
  const vaultAccount = await connection.getAccountInfo(vault);
  
  if (!vaultAccount) {
    console.log('❌ VAULT NOT CREATED!');
  } else {
    console.log('✅ Vault exists!');
    console.log('Lamports:', vaultAccount.lamports / 1e9, 'SOL\n');
  }
}

checkState().catch(console.error);

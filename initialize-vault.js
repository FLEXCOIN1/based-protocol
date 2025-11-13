const anchor = require('@coral-xyz/anchor');
const { Connection, PublicKey, Keypair } = require('@solana/web3.js');
const fs = require('fs');

const PROGRAM_ID = new PublicKey('4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd');
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

async function initializeVault() {
  console.log('=== INITIALIZING VAULT ===\n');
  
  // Load your wallet
  const keypairPath = process.env.HOME + '/.config/solana/id.json';
  const keypair = Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(fs.readFileSync(keypairPath, 'utf-8')))
  );
  
  console.log('Admin wallet:', keypair.publicKey.toString());
  
  // Get balance
  const balance = await connection.getBalance(keypair.publicKey);
  console.log('Balance:', balance / 1e9, 'SOL\n');
  
  if (balance < 0.01 * 1e9) {
    console.log('❌ Insufficient balance! Get devnet SOL from:');
    console.log('https://faucet.solana.com\n');
    return;
  }
  
  // Load IDL
  const idl = JSON.parse(fs.readFileSync('./based-frontend/lib/idl.json', 'utf-8'));
  
  const wallet = new anchor.Wallet(keypair);
  const provider = new anchor.AnchorProvider(connection, wallet, {});
  const program = new anchor.Program(idl, PROGRAM_ID, provider);
  
  // Derive vault PDA
  const [vault] = PublicKey.findProgramAddressSync(
    [Buffer.from('vault')],
    program.programId
  );
  
  console.log('Vault PDA:', vault.toString());
  
  // Check if it already exists
  const vaultAccount = await connection.getAccountInfo(vault);
  if (vaultAccount) {
    console.log('✅ Vault already exists!\n');
    return;
  }
  
  console.log('Creating vault... (this will cost ~0.001 SOL)\n');
  
  // The vault gets created by the first stake transaction
  // But we need to check if there's a separate initialize_vault instruction
  console.log('❌ PROBLEM: Vault needs to be created by the smart contract.');
  console.log('Your contract might need a separate "initialize_vault" instruction.');
  console.log('OR the vault should be created automatically in create_stake_account.\n');
  console.log('Check your Rust code in programs/based-protocol/src/lib.rs');
  console.log('The vault PDA needs to be initialized before users can stake.\n');
}

initializeVault().catch(console.error);

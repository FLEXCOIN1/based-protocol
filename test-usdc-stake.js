const { PublicKey, Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");
const { getAssociatedTokenAddress, getAccount } = require("@solana/spl-token");
const fs = require("fs");

const PROGRAM_ID = new PublicKey("4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd");
const USDC_MINT = new PublicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU");

async function testUSDCStaking() {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    
    // Load wallet
    const walletPath = process.env.HOME + "/.config/solana/id.json";
    const walletKeypair = Keypair.fromSecretKey(
        new Uint8Array(JSON.parse(fs.readFileSync(walletPath, "utf-8")))
    );
    
    console.log("=== TESTING USDC STAKING ===");
    console.log("Wallet:", walletKeypair.publicKey.toString());
    
    // Find PDAs
    const [userStake] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_stake"), walletKeypair.publicKey.toBuffer()],
        PROGRAM_ID
    );
    
    const [vaultUsdc] = PublicKey.findProgramAddressSync(
        [Buffer.from("vault_usdc")],
        PROGRAM_ID
    );
    
    console.log("User Stake PDA:", userStake.toString());
    console.log("Vault USDC PDA:", vaultUsdc.toString());
    
    // Get user's USDC account
    const userUsdc = await getAssociatedTokenAddress(USDC_MINT, walletKeypair.publicKey);
    console.log("User USDC Account:", userUsdc.toString());
    
    // Check if user has USDC
    try {
        const accountInfo = await getAccount(connection, userUsdc);
        console.log("User USDC Balance:", Number(accountInfo.amount) / 1e6, "USDC");
        
        if (Number(accountInfo.amount) === 0) {
            console.log("\n❌ You need devnet USDC first!");
            console.log("Get some here: https://faucet.circle.com/");
            return;
        }
        
        console.log("\n✅ Ready to test USDC staking!");
    } catch (e) {
        console.log("\n❌ No USDC account found. Creating one...");
        console.log("Run: spl-token create-account 4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU --url devnet");
        return;
    }
}

testUSDCStaking().catch(console.error);

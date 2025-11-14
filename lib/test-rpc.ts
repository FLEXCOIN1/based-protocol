import { rpcManager, getConnection } from './config';

async function testRpcFailover() {
  console.log('Testing RPC Failover System...\n');
  
  // Test 1: Get initial connection
  console.log('Test 1: Initial connection');
  const conn1 = getConnection();
  console.log(`Current RPC: ${rpcManager.getCurrentEndpoint()}\n`);
  
  // Test 2: Simulate 3 failures to trigger failover
  console.log('Test 2: Simulating 3 failures...');
  for (let i = 1; i <= 3; i++) {
    rpcManager.recordFailure();
    console.log(`Failure ${i} recorded`);
  }
  console.log(`Switched to: ${rpcManager.getCurrentEndpoint()}\n`);
  
  // Test 3: Record success
  console.log('Test 3: Recording success');
  rpcManager.recordSuccess();
  console.log(`Still on: ${rpcManager.getCurrentEndpoint()}\n`);
  
  // Test 4: Test actual connection
  console.log('Test 4: Testing real connection...');
  try {
    const conn = getConnection();
    const version = await conn.getVersion();
    console.log(`✅ Connected successfully!`);
    console.log(`Solana version: ${JSON.stringify(version)}`);
  } catch (error) {
    console.log(`❌ Connection failed: ${error}`);
  }
}

testRpcFailover();

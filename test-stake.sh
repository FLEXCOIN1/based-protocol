#!/bin/bash

echo "=== TESTING BASED PROTOCOL ON DEVNET ==="

PROGRAM_ID="4DwCVbdc5AxpPsVULdpATygFEJrwT87Zf8L6CrbfBmKd"

echo "1. Checking if program exists..."
solana program show $PROGRAM_ID --url devnet

echo ""
echo "2. Checking state PDA..."
STATE_PDA=$(solana address --url devnet derive-pda state --program-id $PROGRAM_ID)
echo "State PDA: $STATE_PDA"
solana account $STATE_PDA --url devnet

echo ""
echo "=== DONE ==="
echo ""
echo "If the program doesn't exist or state PDA has no data, your contract isn't properly deployed/initialized."

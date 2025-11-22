#!/bin/bash
while true; do
  echo "Starting Next.js dev server..."
  npm run dev
  echo "Server crashed, restarting in 2 seconds..."
  sleep 2
done

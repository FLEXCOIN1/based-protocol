#!/bin/bash

echo "🎨 Fixing countdown timer contrast..."

cp app/page.tsx app/page.tsx.backup_contrast

# Just update the countdown box styling
sed -i 's/bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20/bg-white border-2 border-blue-300 shadow-lg/g' app/page.tsx

# Update countdown text colors
sed -i 's/text-blue-200/text-gray-500/g' app/page.tsx

echo "✅ Countdown now has white background with visible text"


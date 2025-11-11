#!/bin/bash

echo "📅 Updating launch date to Monday, November 18, 2025..."

# Update homepage countdown
sed -i "s/December 3, 2025 00:00:00 UTC/November 18, 2025 00:00:00 UTC/g" app/page.tsx
sed -i "s/Launching December 3, 2025/Launching Monday, November 18, 2025/g" app/page.tsx

# Update FAQ
sed -i "s/December 3, 2025/November 18, 2025/g" app/faq/page.tsx
sed -i "s/December 3rd/November 18th/g" app/faq/page.tsx

# Update whitepaper
sed -i "s/December 3, 2025/November 18, 2025/g" app/whitepaper/page.tsx

# Update growth page
sed -i "s/Dec 3rd/November 18th/g" app/growth/page.tsx
sed -i "s/December 3, 2025/November 18, 2025/g" app/growth/page.tsx

echo "✅ Launch date updated to Monday, November 18, 2025 across all pages"


#!/bin/bash

echo "📱 Checking mobile responsiveness..."
echo ""

# Check navigation - does it have mobile menu?
echo "❌ ISSUE: Navigation has too many links for mobile"
echo "   Current: 8+ nav links won't fit on mobile screen"
echo ""

# Check countdown grid
echo "✅ GOOD: Countdown uses grid-cols-4 (should work on mobile)"
echo ""

# Check calculator
echo "✅ GOOD: Calculator uses md:grid-cols-2 (stacks on mobile)"
echo ""

# Check features
echo "✅ GOOD: Features use md:grid-cols-2 lg:grid-cols-4 (responsive)"
echo ""

echo "🔧 FIXES NEEDED:"
echo "1. Navigation - add hamburger menu for mobile"
echo "2. Hero text - reduce font size on mobile"
echo "3. Countdown numbers - might be too large on small screens"
echo ""
echo "Want me to add mobile hamburger menu? (Yes/No)"


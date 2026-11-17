#!/bin/sh
# Copy the latest content and app code from "../Parenting App" into this PWA, then validate.
# index.html is NOT copied (this one has the PWA tags). After running, bump VERSION in sw.js.
set -e
cd "$(dirname "$0")"
cp ../"Parenting App"/style.css ../"Parenting App"/app.js ../"Parenting App"/check.js .
cp ../"Parenting App"/content/*.js content/
node check.js
echo "Done. Now bump VERSION in sw.js, then commit and push."

# APK LIVE TV - FULL FIXED

Fixed:
- playlist.json URL double-wrap removed
- script.js now safely opens channel.html?url=encoded-direct-stream
- channel.html supports old ?file= wrapper and shows better Stream Failed reason
- Deploy ready for Vercel/Netlify/static hosting

Note: Some IPTV links can still fail if the source stream is expired, IP-locked, geo-blocked, or CORS-blocked.


## Vercel setup
Upload all files to GitHub root, then deploy with Vercel. Player routes:
- https://apklive.vercel.app/jw-player?url=ENCODED_M3U8
- https://apklive.vercel.app/jw-player.html?url=ENCODED_M3U8

Old files kept: index.html, channel.html, PLAYER.html, RS.html, style.css, script.js, bootstrap.min.css.

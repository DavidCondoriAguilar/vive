# Analytics Runtime Configuration

## Overview

Analytics are now loaded at **runtime** instead of **build time**. This means:
- ✅ No environment variables exposed in build
- ✅ Same build artifact for all environments
- ✅ Easy to change analytics IDs without rebuild

## Configuration Methods

### Method 1: Inline Script (Recommended for Static Hosting)

Add this script **before** the analytics.js script in your HTML:

```html
<script>
  window.APP_CONFIG = {
    GA_ID: 'G-XXXXXXXXXX',
    FB_PIXEL: 'XXXXXXXXXXXXXXXXX'
  };
</script>
<script src="/config/analytics.js" defer></script>
```

### Method 2: Server-Side Template (Recommended for Dynamic Hosting)

If your server supports templating (Nginx, Apache, Node.js), you can inject config at runtime:

**Nginx example:**
```nginx
location / {
    sub_filter '</head>' '<script>window.APP_CONFIG={GA_ID:"$ga_id",FB_PIXEL:"$fb_pixel"}</script></head>';
}
```

**Node.js/Express example:**
```javascript
res.render('index', {
  gaId: process.env.GA_ID,
  fbPixel: process.env.FB_PIXEL
});
```

### Method 3: External Config File

Load a separate config file before analytics.js:

```html
<script src="/config/app-config.js"></script>
<script src="/config/analytics.js" defer></script>
```

Where `app-config.js` contains:
```javascript
window.APP_CONFIG = {
  GA_ID: 'G-XXXXXXXXXX',
  FB_PIXEL: 'XXXXXXXXXXXXXXXXX'
};
```

## Environment Variables (Development Only)

For **local development**, you can still use `.env` files:

```bash
# .env.local
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_FB_PIXEL_ID=XXXXXXXXXXXXXXXXX
```

These will be replaced in the HTML template during build, but for production, prefer runtime configuration.

## Deployment Checklist

- [ ] Set `window.APP_CONFIG.GA_ID` with your Google Analytics Measurement ID
- [ ] Set `window.APP_CONFIG.FB_PIXEL` with your Facebook Pixel ID
- [ ] Test that analytics are firing correctly (use browser dev tools)
- [ ] Verify no console errors about missing config

## Testing

Open browser console and check:

```javascript
// Should show your config
console.log(window.APP_CONFIG);

// Should show dataLayer (if GA is loaded)
console.log(window.dataLayer);

// Should show fbq (if Facebook Pixel is loaded)
console.log(window.fbq);
```

## Security Notes

- ✅ No build-time exposure of analytics IDs
- ✅ Config can be changed per environment without rebuild
- ⚠️ Still validate analytics IDs in production
- ⚠️ Use HTTPS for all analytics endpoints (already configured in CSP)

## Troubleshooting

### Analytics not loading

1. Check browser console for errors
2. Verify `window.APP_CONFIG` is set before analytics.js loads
3. Check Network tab for failed requests to Google/Facebook

### CSP errors

If you see CSP violations, ensure your policy includes:
- `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net`
- `connect-src https://www.google-analytics.com https://www.facebook.com`

### Build shows `%VITE_*%` placeholders

This is expected if variables aren't set. The runtime config will override them.

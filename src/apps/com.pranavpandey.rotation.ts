// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Rotation",
  "id": "com.pranavpandey.rotation",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"Interstitial close button\"][clickable=true]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "snapshotUrls": "https://i.gkd.li/i/23497601",
          "key": 0
        }
      ]
    }
  ]
});

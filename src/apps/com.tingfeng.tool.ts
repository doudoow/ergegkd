// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "囧次元",
  "id": "com.tingfeng.tool",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tobid_interstitial_skip_ll\" || vid=\"tobid_splash_skip_ll\"][visibleToUser=true]",
          "activityIds": [
            "com.windmill.sdk.widget.InterstitialView",
            "app.video.guoguo.MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/21278557",
            "https://i.gkd.li/i/21282765"
          ],
          "exampleUrls": "https://e.gkd.li/64670315-c171-42f9-a55a-5bedf29f24c3",
          "key": 0
        }
      ]
    }
  ]
});

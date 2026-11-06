// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "今日水印相机",
  "id": "camera.timestamp.mark.watermark",
  "groups": [
    {
      "name": "全屏广告-谷歌广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageButton[desc=\"Interstitial close button\"][visibleToUser=true] < FrameLayout <2 RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17058992",
          "exampleUrls": "https://e.gkd.li/1ab940d5-88b8-4088-81fe-9cb72c4cbd53",
          "key": 0
        }
      ]
    }
  ]
});

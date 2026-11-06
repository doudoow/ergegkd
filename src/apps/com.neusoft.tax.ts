// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "楚税通",
  "id": "com.neusoft.tax",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "WebView[childCount=4] >2 [text=\"以后再说立即体验\"]",
          "position": {
            "left": "width * 0.2528",
            "top": "width * 0.0842"
          },
          "activityIds": "io.dcloud.PandoraEntryActivity",
          "snapshotUrls": "https://i.gkd.li/i/15362911",
          "exampleUrls": "https://m.gkd.li/57941037/7496414a-c742-4689-ad1b-60d903b90d52",
          "key": 0
        }
      ]
    }
  ]
});

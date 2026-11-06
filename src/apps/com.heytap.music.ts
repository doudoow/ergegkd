// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "音乐",
  "id": "com.heytap.music",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] + [text=\"检测到新版本\"]",
          "activityIds": "com.allsaints.music.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14987173",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true] + [text=\"检测到新版本\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[vid=\"btnFreeListening\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "activityIds": [
            "com.allsaints.ad.sjy.reward.SRewardLoadingActivity",
            "com.allsaints.music.MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/16200623",
            "https://i.gkd.li/i/21175600"
          ],
          "key": 0
        }
      ]
    }
  ]
});

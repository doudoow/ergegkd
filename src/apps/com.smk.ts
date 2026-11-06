// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "杭州市民卡",
  "id": "com.smk",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.smk:id/iv_close_ad\" || vid=\"tianmu_widget_iv_close\"][visibleToUser=true]",
          "activityIds": [
            "com.smk.activity.MainActivity",
            "com.smk.activity.LaunchActivity",
            "com.tianmu.biz.activity.InterstitialActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13402584",
            "https://i.gkd.li/i/13425013",
            "https://i.gkd.li/i/23567834"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close_ad\" || vid=\"tianmu_widget_iv_close\"][visibleToUser=true]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.LaunchActivity",
            "com.tianmu.biz.activity.InterstitialActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13402584",
            "https://i.gkd.li/i/13425013",
            "https://i.gkd.li/i/23567834"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"com.smk:id/iv_close_ad\"]",
          "activityIds": [
            "com.smk.activity.MainActivity",
            "com.smk.activity.LaunchActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13402584",
            "https://i.gkd.li/i/13425013"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.smk:id/iv_close_ad\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.smk:id/iv_close_ad\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.smk:id/iv_close_ad\"]",
          "key": 0
        }
      ]
    }
  ]
});

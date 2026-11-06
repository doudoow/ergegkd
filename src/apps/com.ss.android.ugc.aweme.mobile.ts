// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "抖音",
  "id": "com.ss.android.ugc.aweme.mobile",
  "groups": [
    {
      "name": "功能类-发现通讯录好友弹窗",
      "desc": "点击[暂时不要]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 10000,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"暂时不要\"] +2 [text=\"发现好友\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14467944",
          "exampleUrls": "https://m.gkd.li/57941037/af8632c4-f5fd-403a-aca9-daf92ec6cda1",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "点击[以后再说]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"你还没有开启位置权限\"] +2 * > [text=\"以后再说\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14614184",
          "exampleUrls": "https://m.gkd.li/57941037/546e45cf-d151-47f4-830e-0f1b7ac21794",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-发现通讯录好友",
      "desc": "点击【暂时不要】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"发现好友\"] -2 [text=\"暂时不要\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.ss.android.ugc.aweme.mobile:id/teen_mode_title\"] +n [id=\"com.ss.android.ugc.aweme.mobile:id/bt_i_know\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.ss.android.ugc.aweme.mobile:id/teen_mode_title\"] +n [id=\"com.ss.android.ugc.aweme.mobile:id/bt_i_know\"]",
          "key": 0
        }
      ]
    }
  ]
});

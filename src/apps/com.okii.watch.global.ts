// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小天才",
  "id": "com.okii.watch.global",
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
          "matches": "[id=\"com.okii.watch.global:id/iv_close\"]",
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity",
          "snapshotUrls": "https://i.gkd.li/i/13630943",
          "key": 0
        },
        {
          "matches": "[id=\"com.okii.watch.global:id/iv_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity",
          "snapshotUrls": "https://i.gkd.li/i/13630943",
          "key": 2
        }
      ]
    },
    {
      "name": "其他-手表安全守护弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.okii.watch.global:id/photo_sensitive_close\"]",
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "snapshotUrls": "https://i.gkd.li/i/13630944",
          "exampleUrls": "https://m.gkd.li/57941037/8a5030a1-2b24-4a8a-a944-29d0eaabf936",
          "key": 0
        },
        {
          "matches": "[vid=\"photo_sensitive_close\"]",
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "snapshotUrls": "https://i.gkd.li/i/13630944",
          "exampleUrls": "https://m.gkd.li/57941037/8a5030a1-2b24-4a8a-a944-29d0eaabf936",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-手表安全守护弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.okii.watch.global:id/photo_sensitive_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-手表安全守护弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.okii.watch.global:id/photo_sensitive_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.okii.watch.global:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "手表安全守护弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.okii.watch.global:id/photo_sensitive_close\"]",
          "key": 0
        }
      ]
    }
  ]
});

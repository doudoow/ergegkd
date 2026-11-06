// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "四川航空",
  "id": "com.bw30.zsch",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.bw30.zsch:id/tv_cancel\"]",
          "activityIds": "com.bw.zsch.MainActivityTab",
          "snapshotUrls": "https://i.gkd.li/i/13068699",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_cancel\"]",
          "activityIds": "com.bw.zsch.MainActivityTab",
          "snapshotUrls": "https://i.gkd.li/i/13068699",
          "key": 1
        },
        {
          "matches": "[id=\"com.bw30.zsch:id/tv_cancel\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-升级弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.bw30.zsch:id/tv_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "升级弹窗",
      "enable": false,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.bw30.zsch:id/tv_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});

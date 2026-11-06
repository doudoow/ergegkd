// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "今日校园",
  "id": "com.wisedu.cpdaily",
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
          "matches": "[id=\"com.wisedu.cpdaily:id/btn_update\"] + [id=\"com.wisedu.cpdaily:id/tv_ignore\"]",
          "activityIds": "com.wisorg.wisedu.home.ui.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13643565",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_update\"] + [vid=\"tv_ignore\"]",
          "activityIds": "com.wisorg.wisedu.home.ui.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13643565",
          "key": 1
        },
        {
          "matches": "[id=\"com.wisedu.cpdaily:id/btn_update\"] + [id=\"com.wisedu.cpdaily:id/tv_ignore\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.wisedu.cpdaily:id/btn_update\"] + [id=\"com.wisedu.cpdaily:id/tv_ignore\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.wisedu.cpdaily:id/btn_update\"] + [id=\"com.wisedu.cpdaily:id/tv_ignore\"]",
          "key": 0
        }
      ]
    }
  ]
});

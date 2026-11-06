// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "搜狐视频",
  "id": "com.sohu.sohuvideo",
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
          "matches": "@[id=\"com.sohu.sohuvideo:id/ivClose\"] + LinearLayout [text=\"新版本上线啦\"]",
          "activityIds": ".ui.homepage.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13435504",
          "key": 0
        },
        {
          "matches": "@[vid=\"ivClose\"] + LinearLayout [text=\"新版本上线啦\"]",
          "activityIds": ".ui.homepage.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13435504",
          "key": 1
        },
        {
          "matches": "@[id=\"com.sohu.sohuvideo:id/ivClose\"] + LinearLayout [text=\"新版本上线啦\"]",
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
          "matches": "@[id=\"com.sohu.sohuvideo:id/ivClose\"] + LinearLayout [text=\"新版本上线啦\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"com.sohu.sohuvideo:id/tv_ok\"] -2 LinearLayout > [text=\"设置青少年模式\"]",
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
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"com.sohu.sohuvideo:id/ivClose\"] + LinearLayout [text=\"新版本上线啦\"]",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "搜图神器",
  "id": "com.example.administrator.searchpicturetool",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13989147",
          "key": 0
        }
      ]
    }
  ]
});

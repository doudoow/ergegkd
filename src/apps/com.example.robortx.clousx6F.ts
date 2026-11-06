// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Clousx6",
  "id": "com.example.robortx.clousx6F",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] + * >2 [text=\"上一条\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14571096",
          "exampleUrls": "https://m.gkd.li/57941037/a59e4c30-29e3-4d7e-9c05-f7e844ff6ac3",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"tv_next\"][text=\"下一条\"] <<n LinearLayout - [vid=\"iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});

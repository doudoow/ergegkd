// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ClrvAI",
  "id": "com.panaceasoft.pswallpaper",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"cb_ignore\"][checked=false]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14141561",
          "exampleUrls": "https://e.gkd.li/b92e4e94-fafc-47b1-9774-3126cfaed981"
        },
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14141561",
          "exampleUrls": "https://e.gkd.li/b92e4e94-fafc-47b1-9774-3126cfaed981"
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

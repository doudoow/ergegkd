// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Clash Meta for Android",
  "id": "com.github.metacubex.clash.meta",
  "groups": [
    {
      "name": "功能类-代理页面自动点击延迟测试",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"url_test_view\"][visibleToUser=true]",
          "activityIds": "com.github.kr328.clash.ProxyActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20926416",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20926355",
          "exampleUrls": "https://e.gkd.li/490f4572-a1af-4345-8f6e-3b0081929628",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[启动]后返回",
      "desc": "进app后 ①点击[启动] ②返回键",
      "matchTime": 1200,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[clickable=true] >3 [text$=\"启动\"]",
          "key": 0,
          "name": "①点击[启动]",
          "snapshotUrls": "https://i.gkd.li/i/25926380",
          "exampleUrls": "https://e.gkd.li/7243edfc-00ac-4551-bf87-92ac0cdaba6f"
        },
        {
          "matches": "[parent=null]",
          "action": "back",
          "actionDelay": 120,
          "preKeys": [
            0
          ],
          "name": "②返回键",
          "key": 1
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "RAR",
  "id": "com.rarlab.rar",
  "groups": [
    {
      "name": "全屏广告-订购 RAR 弹窗",
      "desc": "点击[放弃]",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"订购\" || text=\"訂閱\"] + [text=\"放弃\" || text=\"解除\"]",
          "activityIds": "com.rarlab.rar.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12781596",
            "https://i.gkd.li/i/15801328"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"订购\" || text=\"訂閱\"] + [text=\"放弃\" || text=\"解除\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12781596",
            "https://i.gkd.li/i/15801328"
          ],
          "key": 1
        },
        {
          "matches": "[text=\"订购\"] + [text=\"放弃\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-订购 RAR 弹窗",
      "desc": "自动点击【放弃】",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"订购\"] + [text=\"放弃\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "订购 RAR 弹窗",
      "desc": "自动点击【放弃】",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"订购\"] + [text=\"放弃\"]",
          "key": 0
        }
      ]
    }
  ]
});

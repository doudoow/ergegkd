// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "MT管理器",
  "id": "bin.mt.plus",
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
          "matches": [
            "[text=\"更新\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".Main",
          "snapshotUrls": "https://i.gkd.li/i/16050794",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-优惠活动弹窗",
      "matchTime": 14000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"活动\"] < * < LinearLayout +n ScrollView[index=parent.childCount.minus(1)] >(1,2) [text=\"开通会员\"] - [text=\"关闭\"]",
          "activityIds": ".Main",
          "snapshotUrls": "https://i.gkd.li/i/28843042",
          "exampleUrls": "https://e.gkd.li/bdb813c7-2124-4e78-8a40-de37ec327021",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"更新\"]",
          "key": 0
        }
      ]
    }
  ]
});

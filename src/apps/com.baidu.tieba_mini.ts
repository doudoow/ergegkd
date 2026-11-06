// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "贴吧极速版",
  "id": "com.baidu.tieba_mini",
  "groups": [
    {
      "name": "分段广告-首页信息流广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "LinearLayout > [text=\"广告\"] + ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12905039"
        },
        {
          "matches": "[text=\"屏蔽广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12904633"
          ]
        }
      ]
    },
    {
      "name": "未分类-首页-信息流广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "LinearLayout > [text=\"广告\"] + ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12905039"
        },
        {
          "matches": "[text=\"屏蔽广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12904633"
          ]
        }
      ]
    },
    {
      "name": "局部广告-首页-信息流广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "LinearLayout > [text=\"广告\"] + ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12905039"
        },
        {
          "matches": "[text=\"屏蔽广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12904633"
          ]
        }
      ]
    },
    {
      "name": "首页-信息流广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "LinearLayout > [text=\"广告\"] + ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12905039"
        },
        {
          "matches": "[text=\"屏蔽广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12904633"
          ]
        }
      ]
    }
  ]
});

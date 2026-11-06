// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "波点音乐",
  "id": "cn.wenyu.bodian",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22845785",
          "exampleUrls": "https://e.gkd.li/349c0f9e-a1d2-4e1d-bd6e-e42c3b3c01a6",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "@TextView[width<130&&height<130][clickable=true] + * > [text=\"开会员享专属曲库\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/22867851",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[desc=\"广告\"][clickable=true][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/22878974",
          "exampleUrls": "https://e.gkd.li/b57e1862-ef27-4b2d-9cf4-c4c1a1a5262e"
        },
        {
          "matches": "[desc$=\"广告\"] > ImageView[index=1][width=height][clickable=true][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22878992",
          "exampleUrls": "https://e.gkd.li/5f249d6e-ac2d-4fda-a53c-039c8091ce63"
        }
      ]
    }
  ]
});

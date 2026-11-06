// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网飞猫",
  "id": "com.ncatC200000V260710.T000218",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "视频详情页广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"广告\"] - [vid=\"pause_close\"]",
          "key": 0,
          "name": "暂停视频时的广告",
          "snapshotUrls": "https://i.gkd.li/i/29900521"
        },
        {
          "matches": "@[childCount=2] > ImageView + [vid=\"image_arrow\"]",
          "key": 1,
          "name": "观看新视频时的提示",
          "snapshotUrls": "https://i.gkd.li/i/29900516"
        }
      ]
    }
  ]
});

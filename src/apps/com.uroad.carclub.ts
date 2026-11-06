// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ETC车宝",
  "id": "com.uroad.carclub",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "View[childCount=4] > @TextView[index=2][clickable=true] <<n [vid=\"ad_container_fl\"]",
          "activityIds": "com.uroad.carclub.main.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13800067"
        },
        {
          "matches": "View[childCount=4] > @TextView[index=2][clickable=true] <<n [vid=\"ad_container_fl\"]",
          "activityIds": ".main.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13800067"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.uroad.carclub:id/ad_container_fl\"] >n View[childCount=4] > TextView[index=2][clickable=true]",
          "activityIds": "com.uroad.carclub.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13800067"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.uroad.carclub:id/ad_container_fl\"] >n View[childCount=4] > TextView[index=2][clickable=true]",
          "activityIds": "com.uroad.carclub.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13800067"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.uroad.carclub:id/ad_container_fl\"] >n View[childCount=4] > TextView[index=2][clickable=true]",
          "activityIds": "com.uroad.carclub.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13800067"
        }
      ]
    }
  ]
});

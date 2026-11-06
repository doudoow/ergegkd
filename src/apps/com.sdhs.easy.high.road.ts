// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "e高速",
  "id": "com.sdhs.easy.high.road",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >3 [text=\"广告\"]",
          "activityIds": "com.sdhs.easy.main.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13670340"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[desc^=\"logoad\"]",
            "[desc^=\"dislike\"] > View[clickable=true]"
          ],
          "activityIds": "com.sdhs.easy.main.activity.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13670340"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[desc^=\"logoad\"]",
            "[desc^=\"dislike\"] > View[clickable=true]"
          ],
          "activityIds": "com.sdhs.easy.main.activity.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13670340"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[desc^=\"logoad\"]",
            "[desc^=\"dislike\"] > View[clickable=true]"
          ],
          "activityIds": "com.sdhs.easy.main.activity.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13670340"
        }
      ]
    }
  ]
});

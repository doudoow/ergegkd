// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "WiFi万能钥匙",
  "id": "com.wifitutu",
  "groups": [
    {
      "name": "局部广告-首页-WiFi列表广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] + FrameLayout >2 [text=\"广告\"]",
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13233916"
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[visibleToUser=true][text=\"广告\"] <<n [id=\"com.wifitutu:id/ad_part\"]",
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13234048"
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] + FrameLayout >2 [text=\"广告\"]",
          "activityIds": ".ui.main.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13233916"
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[visibleToUser=true][text=\"广告\"] <<n [vid=\"ad_part\"]",
          "activityIds": ".ui.main.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13234048"
        },
        {
          "matches": "View < [desc^=\"dislike\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/13233916",
          "key": 4
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/13234048",
          "key": 5
        }
      ]
    },
    {
      "name": "未分类-首页-WiFi列表广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "View < [desc^=\"dislike\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13233916",
          "key": 0
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13234048",
          "key": 1
        }
      ]
    },
    {
      "name": "首页-WiFi列表广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "View < [desc^=\"dislike\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/13233916",
          "key": 0
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/13234048",
          "key": 1
        }
      ]
    }
  ]
});

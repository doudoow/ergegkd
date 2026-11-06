// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "杭州银行",
  "id": "cn.com.hzb.mobilebank.per",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "Image[width<160 && height<160][childCount=0] < @View[clickable=true][childCount=1] <2 View[childCount=2] < View[index=parent.childCount.minus(1)][childCount=1] <n View[id=\"app\"] <<3 [vid=\"h5_pc_container\"]",
          "activityIds": "cn.com.hzb.mobilebank.per.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25150390",
            "https://i.gkd.li/i/25150391"
          ],
          "key": 0
        },
        {
          "matches": "Image[width<160 && height<160][childCount=0] < @View[clickable=true][childCount=1] <2 View[childCount=2] < View[index=parent.childCount.minus(1)][childCount=1] <n View[id=\"app\"] <<3 [vid=\"h5_pc_container\"]",
          "activityIds": ".MainActivity",
          "forcedTime": 10000,
          "matchRoot": true,
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25150390",
            "https://i.gkd.li/i/25150391"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-未登录时自动点击登录",
      "desc": "仅限财富版",
      "key": 1,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"立即登录>\"]",
          "actionMaximum": 1,
          "activityIds": "cn.com.hzb.mobilebank.per.MainActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/25150391",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-朗读版未登录时自动点击登录",
      "key": 2,
      "rules": [
        {
          "matches": "@TextView[text*=\"登录\"][clickable=true] <<5 [vid=\"h5_pc_container\"]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/31796888",
          "key": 0
        }
      ]
    }
  ]
});

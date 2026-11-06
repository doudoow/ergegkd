// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "(涂鸦)智能生活",
  "id": "com.tuya.smartlifeiot",
  "groups": [
    {
      "name": "局部广告-轮播图",
      "desc": "x掉",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"imv_ad_close\"]",
          "activityIds": "com.thingclips.smart.hometab.activity.FamilyHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34208175",
          "exampleUrls": "https://e.gkd.li/96d00f2a-7518-4fe2-aee1-7564a76a7d60",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动允许通断电",
      "desc": "点击[确认]",
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"确认\"] < View -2 [index=0][text$=\"允许通电\" || text$=\"允许断电\"] <<n [vid=\"swipe_layout_container\"]",
          "activityIds": "com.gzl.smart.gzlminiapp.core.view.GZLActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/34208401",
            "https://i.gkd.li/i/34208399"
          ],
          "exampleUrls": "https://e.gkd.li/a6f4f034-cd17-4aa2-8321-96c704d46869",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "光速虚拟机",
  "id": "com.vphonegaga.titan",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "activityIds": ".MyNativeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13292911",
          "exampleUrls": "https://e.gkd.li/ef6b8242-76d7-4ce5-b0fc-4444f72b9b39",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@Image < View +2 [text=\"反馈\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@Image < View +2 [text=\"反馈\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@Image < View +2 [text=\"反馈\"]",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "顺丰速运",
  "id": "com.sf.activity",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < ViewGroup - ScrollView >(2) [text*=\"新版本\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12642445"
        },
        {
          "matches": "@Button[desc=\"取消\"] - ViewGroup >3 [visibleToUser=true][text=\"立即升级\"] <<n [id=\"com.sf.activity:id/rnRootLayout\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13291144"
        },
        {
          "matches": "@[desc=\"取消\"] - ViewGroup >n [text=\"立即升级\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13291144"
        },
        {
          "matches": "@Button[desc=\"取消\"] - ViewGroup >3 [visibleToUser=true][text=\"立即升级\"] <<n [vid=\"rnRootLayout\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13291144"
        }
      ]
    },
    {
      "name": "其他-专属月报弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"MonthReportDialogCloseBtn\"] > ImageView",
          "activityIds": "com.sf.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642441",
          "exampleUrls": "https://m.gkd.li/57941037/83023ed5-f143-4355-9fff-e078011dfa4a",
          "key": 0
        },
        {
          "matches": "[id=\"MonthReportDialogCloseBtn\"] > ImageView",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642441",
          "exampleUrls": "https://m.gkd.li/57941037/83023ed5-f143-4355-9fff-e078011dfa4a",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@Button[id=\"BmsAdDialogViewCloseButton\"] <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid=\"rnRootLayout\"]",
          "activityIds": "com.sf.activity.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14502128",
            "https://i.gkd.li/i/17869485"
          ],
          "exampleUrls": "https://e.gkd.li/3be50f7b-5696-47c9-95cc-ef46f8531967"
        },
        {
          "matches": "@Button[id=\"BmsAdDialogViewCloseButton\"] <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid=\"rnRootLayout\"]",
          "activityIds": ".MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14502128",
            "https://i.gkd.li/i/17869485"
          ],
          "exampleUrls": "https://e.gkd.li/3be50f7b-5696-47c9-95cc-ef46f8531967"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < ViewGroup - ScrollView >(2) [text*=\"新版本\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12642445"
        },
        {
          "matches": "@[desc=\"取消\"] - ViewGroup >n [text=\"立即升级\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13291144"
        }
      ]
    }
  ]
});

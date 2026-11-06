// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小熊油耗",
  "id": "com.firebear.androil",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "来自第三方SDK\"穿山甲\"",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"反馈\"] +2 View > Image",
          "key": 0,
          "name": "点击右上角x",
          "snapshotUrls": [
            "https://i.gkd.li/i/12754919",
            "https://i.gkd.li/i/13324698"
          ]
        },
        {
          "matches": "[text=\"广告\"] + View >4 [text=\"| 跳过\"]",
          "key": 1,
          "name": "点击右上角[数字s|跳过]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12864214"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down\"]",
          "key": 2,
          "name": "点击右上角x (2)",
          "snapshotUrls": [
            "https://i.gkd.li/i/13175439"
          ]
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.firebear.androil:id/dismissNtfImgView\"] < RelativeLayout - [id=\"com.firebear.androil:id/contentLay\"] >3 TextView[text^=\"升级\"]",
          "activityIds": ".app.home.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12755032",
          "key": 0
        },
        {
          "matches": "@[id=\"com.firebear.androil:id/dismissNtfImgView\"] < RelativeLayout - [id=\"com.firebear.androil:id/contentLay\"] >3 TextView[text^=\"升级\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"dismissNtfImgView\"] < RelativeLayout - [vid=\"contentLay\"] >3 TextView[text^=\"升级\"]",
          "activityIds": ".app.home.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12755032",
          "key": 2
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12712742"
        },
        {
          "matches": "@View <2 * <2 * < [id=\"com.firebear.androil:id/adContainerLay\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13088169",
            "https://i.gkd.li/i/12855707",
            "https://i.gkd.li/i/13927561"
          ],
          "key": 1
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百度输入法",
  "id": "com.baidu.input",
  "groups": [
    {
      "name": "全屏广告-创作祝福弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >2 [vid=\"button_close\"]",
          "activityIds": ".ImeAppMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14179064",
          "key": 0
        },
        {
          "matches": "[id=\"android:id/content\"] >2 [vid=\"button_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-底部会员悬浮卡片",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"开会员，全部皮肤免费用\"] <<n [vid=\"shop_content_container\"]",
          "position": {
            "left": "width * 0.9269",
            "top": "width * 0.113"
          },
          "activityIds": "com.baidu.input.layout.store.subshop.activity.SkinShopActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15320905"
        },
        {
          "matches": "[vid=\"close_btn\"]",
          "activityIds": "com.baidu.input.ImeAppMainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15320990"
        },
        {
          "matches": "@[desc=\"开会员，全部皮肤免费用\"] <<n [vid=\"shop_content_container\"]",
          "position": {
            "left": "width * 0.9269",
            "top": "width * 0.113"
          },
          "activityIds": ".layout.store.subshop.activity.SkinShopActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15320905"
        },
        {
          "matches": "[vid=\"close_btn\"]",
          "activityIds": ".ImeAppMainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15320990"
        }
      ]
    },
    {
      "name": "局部广告-皮肤页-底部VIP弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[desc=\"开会员，全部皮肤免费用\"] +5 View[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-皮肤试用页-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 4,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15376423"
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14406395"
        }
      ]
    }
  ]
});

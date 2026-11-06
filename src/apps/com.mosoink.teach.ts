// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云班课",
  "id": "com.mosoink.teach",
  "groups": [
    {
      "name": "全屏广告-首页班课列表广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13778179",
          "exampleUrls": "https://m.gkd.li/64072399/4f7366d4-77eb-4a11-8e08-26afc29f29ed"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup -4 ViewGroup >2 [text^=\"扭动手机\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13786802",
          "exampleUrls": "https://m.gkd.li/64072399/ab4a196f-725d-4e03-aabf-fb0eb6018f51"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13784406",
          "exampleUrls": "https://m.gkd.li/64072399/69bb91ee-5367-4819-94d7-90e357dd9d3c"
        },
        {
          "matches": "[vid=\"interact_ad_root\"] > [vid=\"iv_close\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13778123",
          "exampleUrls": "https://m.gkd.li/64072399/695871fb-9c73-4c93-a6d1-18d90786604a"
        }
      ]
    },
    {
      "name": "未分类-首页-班课列表广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup > ViewGroup",
          "snapshotUrls": "https://i.gkd.li/i/13778179",
          "exampleUrls": "https://m.gkd.li/64072399/4f7366d4-77eb-4a11-8e08-26afc29f29ed",
          "key": 0
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup < ViewGroup < ViewGroup - ViewGroup > FrameLayout + ViewGroup > ViewGroup",
          "snapshotUrls": "https://i.gkd.li/i/13786802",
          "exampleUrls": "https://m.gkd.li/64072399/ab4a196f-725d-4e03-aabf-fb0eb6018f51",
          "key": 1
        },
        {
          "matches": "TextView - View <1 FrameLayout - FrameLayout >1 FrameLayout > ImageView < FrameLayout",
          "snapshotUrls": "https://i.gkd.li/i/13784406",
          "exampleUrls": "https://m.gkd.li/64072399/69bb91ee-5367-4819-94d7-90e357dd9d3c",
          "key": 2
        },
        {
          "matches": "[id$=\"/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13778123",
          "exampleUrls": "https://m.gkd.li/64072399/695871fb-9c73-4c93-a6d1-18d90786604a",
          "key": 3
        }
      ]
    },
    {
      "name": "全屏广告-班课列表弹窗广告",
      "desc": "关闭班课列表页面的全屏弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@Image[text.length=0] < View <n * > [text=\"反馈\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15051392"
        }
      ]
    },
    {
      "name": "局部广告-首页-班课列表广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup > ViewGroup",
          "snapshotUrls": "https://i.gkd.li/import/13778179",
          "exampleUrls": "https://m.gkd.li/64072399/4f7366d4-77eb-4a11-8e08-26afc29f29ed",
          "key": 0
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup < ViewGroup < ViewGroup - ViewGroup > FrameLayout + ViewGroup > ViewGroup",
          "snapshotUrls": "https://i.gkd.li/import/13786802",
          "exampleUrls": "https://m.gkd.li/64072399/ab4a196f-725d-4e03-aabf-fb0eb6018f51",
          "key": 1
        },
        {
          "matches": "TextView - View <1 FrameLayout - FrameLayout >1 FrameLayout > ImageView < FrameLayout",
          "snapshotUrls": "https://i.gkd.li/import/13784406",
          "exampleUrls": "https://m.gkd.li/64072399/69bb91ee-5367-4819-94d7-90e357dd9d3c",
          "key": 2
        },
        {
          "matches": "[id$=\"/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13778123",
          "exampleUrls": "https://m.gkd.li/64072399/695871fb-9c73-4c93-a6d1-18d90786604a",
          "key": 3
        }
      ]
    },
    {
      "name": "首页-班课列表广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup > ViewGroup",
          "snapshotUrls": "https://i.gkd.li/import/13778179",
          "exampleUrls": "https://m.gkd.li/64072399/4f7366d4-77eb-4a11-8e08-26afc29f29ed",
          "key": 0
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup < ViewGroup < ViewGroup - ViewGroup > FrameLayout + ViewGroup > ViewGroup",
          "snapshotUrls": "https://i.gkd.li/import/13786802",
          "exampleUrls": "https://m.gkd.li/64072399/ab4a196f-725d-4e03-aabf-fb0eb6018f51",
          "key": 1
        },
        {
          "matches": "TextView - View <1 FrameLayout - FrameLayout >1 FrameLayout > ImageView < FrameLayout",
          "snapshotUrls": "https://i.gkd.li/import/13784406",
          "exampleUrls": "https://m.gkd.li/64072399/69bb91ee-5367-4819-94d7-90e357dd9d3c",
          "key": 2
        },
        {
          "matches": "[id$=\"/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13778123",
          "exampleUrls": "https://m.gkd.li/64072399/695871fb-9c73-4c93-a6d1-18d90786604a",
          "key": 3
        }
      ]
    }
  ]
});

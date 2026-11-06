// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "美图秀秀",
  "id": "com.mt.mtxx.mtxx",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"升级新版客户端\"] - [text=\"取消\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13238352",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-VIP弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.mt.mtxx.mtxx.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14368853",
          "exampleUrls": "https://m.gkd.li/57941037/d98355c6-1308-4ed1-bf29-56499e22446d",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"][clickable=true][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14368853",
          "exampleUrls": "https://m.gkd.li/57941037/d98355c6-1308-4ed1-bf29-56499e22446d",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - * > [text=\"广告\"]",
          "activityIds": "com.cosmos.album.album3.XXAlbumMainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15076408"
        },
        {
          "matches": "@ImageView[clickable=true] - * > [text=\"广告\"]",
          "key": 1,
          "name": "所有图片页",
          "snapshotUrls": "https://i.gkd.li/i/15076408"
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"升级新版客户端\"] - [text=\"取消\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});

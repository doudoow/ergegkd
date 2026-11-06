// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "360摄像机",
  "id": "com.qihoo.camera",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] +4 TextView[text=\"去开通\"]",
          "actionMaximum": 1,
          "activityIds": "com.qihoo.jia.playpage.RecordPlayActivity",
          "name": "云收藏弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13630755",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.qihoo.jia.ui.activity.TabMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/17656326",
          "exampleUrls": "https://e.gkd.li/c88cdec7-e6da-4bbf-821c-76459d0daff9",
          "key": 0
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.qihoo.jia.ui.activity.TabMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/17656326",
          "exampleUrls": "https://e.gkd.li/c88cdec7-e6da-4bbf-821c-76459d0daff9",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-卡录像界面广告",
      "enable": false,
      "actionMaximum": 1,
      "key": 2,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]",
          "name": "视频下方卡片式广告",
          "key": 0
        },
        {
          "matches": "ViewGroup > @ImageView[clickable=true] -n TextView[text=\"云收藏\"]",
          "name": "云收藏弹窗广告",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-卡录像界面广告",
      "enable": false,
      "actionMaximum": 1,
      "key": 3,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]",
          "name": "视频下方卡片式广告",
          "key": 0
        },
        {
          "matches": "ViewGroup > @ImageView[clickable=true] -n TextView[text=\"云收藏\"]",
          "name": "云收藏弹窗广告",
          "key": 1
        }
      ]
    },
    {
      "name": "卡录像界面广告",
      "enable": false,
      "actionMaximum": 1,
      "key": 4,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]",
          "name": "视频下方卡片式广告",
          "key": 0
        },
        {
          "matches": "ViewGroup > @ImageView[clickable=true] -n TextView[text=\"云收藏\"]",
          "name": "云收藏弹窗广告",
          "key": 1
        }
      ]
    }
  ]
});

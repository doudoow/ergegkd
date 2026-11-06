// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ZzzFun",
  "id": "org.daimhim.zzzfun",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "org.daimhim.zzzfun.ui.home.video.VideoDetailsActivity",
          "snapshotUrls": "https://i.gkd.li/i/13402608",
          "key": 0
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".ui.home.video.VideoDetailsActivity",
          "snapshotUrls": "https://i.gkd.li/i/13402608",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView -2 ImageView + FrameLayout > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView -2 ImageView + FrameLayout > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView -2 ImageView + FrameLayout > ImageView",
          "key": 0
        }
      ]
    }
  ]
});

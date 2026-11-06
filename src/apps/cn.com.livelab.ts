// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "纷玩岛",
  "id": "cn.com.livelab",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Button[clickable=true][childCount=0][visibleToUser=true] <2 View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "cn.com.livelab.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13258873",
          "key": 0
        },
        {
          "matches": "@Button[clickable=true][childCount=0][visibleToUser=true] <2 View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13258873",
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
          "matches": "View >n View[childCount=2] > ImageView + Button",
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
          "matches": "@Button - ImageView < View < View < View < View < FrameLayout < FrameLayout < FrameLayout[id=\"android:id/content\"]",
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
          "matches": "View >n View[childCount=2] > ImageView + Button",
          "key": 0
        }
      ]
    }
  ]
});

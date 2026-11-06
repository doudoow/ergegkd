// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "365时政",
  "id": "cn.net.shizheng.study",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "View[childCount=2] > ImageView[id=\"\"] + Button[id=\"\"][clickable=true]",
          "activityIds": "cn.dingwei.cloud_classroom.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12708731",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "View[childCount=2] > ImageView[id=\"\"] + Button[id=\"\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@Button - ImageView < View < View < View < View < FrameLayout < FrameLayout < FrameLayout < FrameLayout[id=\"android:id/content\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "View[childCount=2] > ImageView[id=\"\"] + Button[id=\"\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});

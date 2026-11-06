// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国军号",
  "id": "cn.mil.junhao",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"splash_adv_ship\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806892",
          "key": 0
        },
        {
          "matches": "[id=\"cn.mil.junhao:id/splash_adv_ship\"]",
          "snapshotUrls": "https://i.gkd.li/import/13806892",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-右侧悬浮窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 [vid=\"float_feedback\"]",
          "actionMaximum": 1,
          "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13806896"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 FrameLayout <2 [vid=\"fragment_containerx\"]",
          "actionMaximum": 1,
          "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13806894"
        }
      ]
    },
    {
      "name": "功能类-首页右侧浮窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"fragment_containerx\"] > FrameLayout > ImageView[index=2][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-意见反馈浮窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"float_feedback\"] > ImageView[index=2][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页右侧浮窗",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView - FrameLayout - ImageView < FrameLayout <2 [id=\"cn.mil.junhao:id/fragment_containerx\"]",
          "snapshotUrls": "https://i.gkd.li/import/13806894",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-意见反馈浮窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView - FrameLayout - ImageView < [id=\"cn.mil.junhao:id/float_feedback\"]",
          "snapshotUrls": "https://i.gkd.li/import/13806896",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "汽车之家",
  "id": "com.cubic.autohome",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.cubic.autohome:id/operate_show_exit_layout\"]",
          "activityIds": "com.cubic.autohome.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12836324",
          "key": 0
        },
        {
          "matches": "[vid=\"operate_show_exit_layout\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12836324",
          "key": 1
        },
        {
          "matches": "[id=\"com.cubic.autohome:id/operate_show_exit_layout\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < * <2 * - [id=\"android:id/tabhost\"]",
          "activityIds": "com.cubic.autohome.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "领福利悬浮窗",
          "snapshotUrls": "https://i.gkd.li/i/13885414"
        },
        {
          "matches": "[id=\"com.autohome.main.car:id/image_live_close\" || id=\"com.autohome.main.car:id/view_ad_close\"]",
          "activityIds": "com.cubic.autohome.MainActivity",
          "key": 1,
          "name": "直播悬浮窗",
          "snapshotUrls": "https://i.gkd.li/i/24221462"
        },
        {
          "matches": "@ImageView[visibleToUser=true] < * <2 * - [id=\"android:id/tabhost\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "领福利悬浮窗",
          "snapshotUrls": "https://i.gkd.li/i/13885414"
        },
        {
          "matches": "[id=\"com.autohome.main.car:id/image_live_close\" || id=\"com.autohome.main.car:id/view_ad_close\"]",
          "activityIds": ".MainActivity",
          "key": 3,
          "name": "直播悬浮窗",
          "snapshotUrls": "https://i.gkd.li/i/24221462"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.cubic.autohome:id/operate_show_exit_layout\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-右下角领福利悬浮窗",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < * <2 * - [id=\"android:id/tabhost\"]",
          "activityIds": "com.cubic.autohome.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13885414",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.cubic.autohome:id/operate_show_exit_layout\"]",
          "key": 0
        }
      ]
    }
  ]
});

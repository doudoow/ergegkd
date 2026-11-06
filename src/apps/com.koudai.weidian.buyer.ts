// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微店",
  "id": "com.koudai.weidian.buyer",
  "groups": [
    {
      "name": "全屏广告-首页红包弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <2 RelativeLayout[childCount=2] < FrameLayout <2 [parent=null]",
          "activityIds": "com.vdian.android.wdb.main.ui.activity.MainTabsActivity",
          "snapshotUrls": "https://i.gkd.li/i/13646151",
          "key": 0
        },
        {
          "matches": "FrameLayout > FrameLayout > RelativeLayout > ImageView[clickable=true][index=1]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页红包弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout > RelativeLayout > ImageView[clickable=true][index=1]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页红包弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout > RelativeLayout > ImageView[clickable=true][index=1]",
          "key": 0
        }
      ]
    }
  ]
});

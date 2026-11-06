// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "主题商店",
  "id": "com.heytap.themestore",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0][width<120 && height<120] <2 RelativeLayout[childCount=2] < ViewGroup[childCount=1] < [id=\"android:id/content\"]",
          "activityIds": "com.nearme.themespace.activities.ThemeMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/21327613",
          "exampleUrls": "https://e.gkd.li/4e97c4fa-6d59-4073-8dd1-fc2deb531a41",
          "key": 0
        }
      ]
    }
  ]
});

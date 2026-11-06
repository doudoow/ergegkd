// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "看护家",
  "id": "com.nursinghome.monitor",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[clickable=true][childCount=1] < ViewGroup <6 ViewGroup + ViewGroup >3 [text=\"广告\"]",
          "actionMaximum": 1,
          "activityIds": ".ui.activity.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17504953",
          "exampleUrls": "https://e.gkd.li/12316698-b92f-4a78-be55-5d9a90700f4a"
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0] + RelativeLayout >2 [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24979384"
        },
        {
          "matches": "[vid=\"qiming_widget_iv_close\"][visibleToUser=true]",
          "activityIds": "com.ja.adx.qiming.ad.activity.InterstitialActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24979391"
        }
      ]
    }
  ]
});

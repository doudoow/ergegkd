// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "万能小组件 Top Widgets",
  "id": "com.growing.topwidgets",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView < * - * > [text=\"立即打开\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14892835"
        },
        {
          "matches": "@ImageView < * - * > [text=\"查看详情\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14945536"
        },
        {
          "matches": "[vid=\"ms_item_pre_render_large_iamge_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15137361"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] <(2,3,4) * >(2,3,4) [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14945552",
            "https://i.gkd.li/i/15286451",
            "https://i.gkd.li/i/16703279"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "actionMaximum": 1,
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14964868"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] <(2,3) * >(2,3) [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14945552",
            "https://i.gkd.li/i/15286451"
          ]
        },
        {
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14964868",
            "https://i.gkd.li/i/14969910"
          ]
        }
      ]
    }
  ]
});

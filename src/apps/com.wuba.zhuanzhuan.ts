// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "转转",
  "id": "com.wuba.zhuanzhuan",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"下次再说\" || text=\"残忍拒绝\"] < * > [text^=\"立即\"][text.length=4]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14292849",
            "https://i.gkd.li/i/14392301"
          ]
        },
        {
          "matches": "@[text=\"下次再说\"] +2 [text=\"立即升级\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14292849"
        },
        {
          "matches": "@[text=\"残忍拒绝\"] +2 [text=\"立即安装\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14392301"
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
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] > ViewGroup[childCount=3] >2 ViewGroup[childCount>1] > ImageView[clickable=true][index=parent.childCount.minus(1)]",
          "activityIds": "com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14927441",
            "https://i.gkd.li/i/15140820"
          ]
        },
        {
          "matches": "[id=\"android:id/content\"] > ViewGroup[childCount=3] >2 ViewGroup[childCount=3] > ImageView[clickable=true][index=2]",
          "activityIds": "com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14927441",
          "exampleUrls": "https://m.gkd.li/57941037/2549c1c7-b3ff-49c0-8bcb-d981427c710a"
        },
        {
          "matches": "[id=\"android:id/content\"] > ViewGroup[childCount=3] > FrameLayout > ViewGroup[childCount=2] > ImageView[index=1]",
          "activityIds": "com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15140820",
          "exampleUrls": "https://m.gkd.li/57941037/034904f5-3f09-48ae-8057-85fbf0152ec4"
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - ViewGroup > [text=\"喜欢就给个好评吧\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/15881026",
          "key": 0
        }
      ]
    }
  ]
});

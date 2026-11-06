// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "荣耀音乐",
  "id": "com.hihonor.cloudmusic",
  "groups": [
    {
      "name": "分段广告-推荐页卡片广告",
      "desc": "点击[关闭]-点击[直接关闭]",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tag_ad_banner\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15835795"
        },
        {
          "matches": "[text=\"直接关闭\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15835857"
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
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"dsl_dialog_root\"]",
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/15860430",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-网易云音乐弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"dsl_dialog_root\"] >4 ImageView[index=1]",
          "key": 0
        }
      ]
    }
  ]
});

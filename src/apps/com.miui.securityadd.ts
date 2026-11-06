// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "系统服务组件",
  "id": "com.miui.securityadd",
  "groups": [
    {
      "name": "全屏广告-游戏加速弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"活动图片\"] +2 @Image[clickable=true][childCount=0][visibleToUser=true] <<n [vid=\"content_view\"]",
          "activityIds": "com.miui.gamebooster.GameBoosterRichWebActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13914659",
            "https://i.gkd.li/i/14668629"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-游戏加速广告弹窗",
      "desc": "点击X",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"活动图片\"] +2 Image[clickable=true]",
          "activityIds": "com.miui.gamebooster.GameBoosterRichWebActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13914659",
            "https://i.gkd.li/i/14668629"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.miui.securityadd:id/webViewContainer\"] [text=\"活动图片\"] +2 Image[clickable=true]",
          "activityIds": "com.miui.gamebooster.GameBoosterRichWebActivity",
          "snapshotUrls": "https://i.gkd.li/import/13914659",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-游戏广告弹窗",
      "desc": "关闭游戏加速弹出的活动广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"活动图片\"] +2 Image[clickable=true]",
          "activityIds": "com.miui.gamebooster.GameBoosterRichWebActivity",
          "snapshotUrls": [
            "https://i.gkd.li/import/13914659",
            "https://i.gkd.li/i/14668629"
          ],
          "key": 0
        }
      ]
    }
  ]
});

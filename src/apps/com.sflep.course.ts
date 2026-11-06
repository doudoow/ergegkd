// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "WE Learn",
  "id": "com.sflep.course",
  "groups": [
    {
      "name": "功能类-离开考试页面弹窗",
      "desc": "点击确定",
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"确认\"][clickable=true] < * - [text^=\"系统检查到你离开了考试页面\"] <n Dialog <n * <<3 [vid=\"pp_about_content\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.ClassActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/23150673",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text^=\"最新版本\"]",
            "[text=\"以后再说\"]"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23452864",
            "https://i.gkd.li/i/23452891"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-中断考试弹窗",
      "desc": "点击确定",
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"确认\"][clickable=true] <n * - [text=\"系统将自动保存已答题记录，确认中断本次考试？\"] <<n Dialog",
          "activityIds": "com.sflep.course.activity.ClassActivity",
          "snapshotUrls": "https://i.gkd.li/i/23923998",
          "key": 0
        },
        {
          "matches": "@[text=\"确认\"][clickable=true] <n * - [text=\"系统将自动保存已答题记录，确认中断本次考试？\"] <<n Dialog",
          "activityIds": ".activity.ClassActivity",
          "snapshotUrls": "https://i.gkd.li/i/23923998",
          "key": 1
        }
      ]
    }
  ]
});

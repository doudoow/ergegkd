// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "知到",
  "id": "com.able.wisdomtree",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击[暂不开启]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"开启消息推送通知\"][visibleToUser=true]",
            "[text=\"暂不开启\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".widget.MyAlertDialog",
            ".login.MainGroupActivity",
            "com.example.advertisement_business.advertisement.AdvertisementActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13458779",
            "https://i.gkd.li/i/13623441",
            "https://i.gkd.li/i/13695447"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击[忽略]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"更新\"] ",
            " [text=\"忽略\"]"
          ],
          "activityIds": [
            ".login.StartActivity",
            "com.example.advertisement_business.advertisement.AdvertisementActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13458796",
            "https://i.gkd.li/i/13797285"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-课程提醒",
      "desc": "点击[已绑定，不再提示]",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"课程提醒\"][visibleToUser=true]",
            "[text=\"已绑定，不再提示\"][visibleToUser=true]"
          ],
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23122012",
          "exampleUrls": "https://e.gkd.li/cceb9974-935d-496b-9b26-431864364433",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-AI分析",
      "key": 3,
      "rules": [
        {
          "matches": "@[vid=\"im_close\"][clickable=true] - [text$=\"同学\"]",
          "activityIds": "com.able.wisdomtree.course.course.studycourse.activity.StudyCourseVideoActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24230330",
          "key": 0
        },
        {
          "matches": "@[vid=\"im_close\"][clickable=true] - [text$=\"同学\"]",
          "activityIds": ".course.course.studycourse.activity.StudyCourseVideoActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24230330",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-消息推送通知",
      "desc": "自动点击暂不开启。",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "TextView[id=\"com.able.wisdomtree:id/negativeButton\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-升级提醒",
      "desc": "自动点击忽略。",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"更新\"] -n [text=\"忽略\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-消息推送通知",
      "desc": "[暂不开启]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@TextView[id=\"com.able.wisdomtree:id/negativeButton\"][text=\"暂不开启\"] + View + [id=\"com.able.wisdomtree:id/positiveButton\"][text=\"马上开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13458779",
            "https://i.gkd.li/import/13623441",
            "https://i.gkd.li/import/13695447"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "消息推送通知",
      "desc": "自动点击暂不开启。",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "TextView[id=\"com.able.wisdomtree:id/negativeButton\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "升级提醒",
      "desc": "自动点击忽略。",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"更新\"] -n [text=\"忽略\"]",
          "key": 0
        }
      ]
    }
  ]
});

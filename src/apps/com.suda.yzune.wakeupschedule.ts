// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "WakeUp课程表",
  "id": "com.suda.yzune.wakeupschedule",
  "groups": [
    {
      "name": "评价提示",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"ib_close\"][clickable=true] +n [text$=\"五星好评\"]",
          "activityIds": "com.suda.yzune.wakeupschedule.schedule.ScheduleActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24230090",
          "key": 0
        },
        {
          "matches": "@[vid=\"ib_close\"][clickable=true] +n [text$=\"五星好评\"]",
          "activityIds": ".schedule.ScheduleActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24230090",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text^=\"新版\"]",
            "[vid=\"update_close\"][clickable=true]"
          ],
          "activityIds": "com.suda.yzune.wakeupschedule.schedule.ScheduleActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24336743",
          "key": 0
        },
        {
          "matches": [
            "[text^=\"新版\"]",
            "[vid=\"update_close\"][clickable=true]"
          ],
          "activityIds": ".schedule.ScheduleActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24336743",
          "key": 1
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 0
        },
        {
          "matches": "@ImageView[visibleToUser=true][width<156 && height<156] < * < [width>1000] +2 ViewGroup >2 [text=\"广告\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/33348748"
        }
      ]
    },
    {
      "name": "功能类-[询问是否保存编辑]弹窗点击[离开]",
      "desc": "开启后请使用右上角按钮保存",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"需要保存当前的编辑吗？\"]",
            "[text=\"离开\"][clickable=true]"
          ],
          "activityIds": ".course_add.AddCourseActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25755603",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "activityIds": ".schedule.ScheduleActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25769013",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "点击[关闭]",
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"id_ad_close\"]",
          "activityIds": ".schedule.ScheduleActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/33348695",
          "exampleUrls": "https://e.gkd.li/520832d5-ec9b-4436-9095-3157d77a7979",
          "key": 0
        }
      ]
    }
  ]
});

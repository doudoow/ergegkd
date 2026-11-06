// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "刺猬猫阅读",
  "id": "com.kuangxiangciweimao.novel",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16893223",
          "exampleUrls": "https://e.gkd.li/fda4f30d-877f-4131-ba56-b6a69e3b7e0c"
        },
        {
          "matches": "[id=\"com.kuangxiangciweimao.novel:id/mTasksView\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13056248"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/16901867",
            "https://i.gkd.li/i/16899125"
          ],
          "exampleUrls": "https://e.gkd.li/8359b29b-b99e-4b6e-b748-a10a9f17005c"
        },
        {
          "matches": "[vid=\"mTasksView\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13056248"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/16893223",
          "exampleUrls": "https://e.gkd.li/fda4f30d-877f-4131-ba56-b6a69e3b7e0c"
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/16901867",
            "https://i.gkd.li/i/16899125"
          ],
          "exampleUrls": "https://e.gkd.li/8359b29b-b99e-4b6e-b748-a10a9f17005c"
        }
      ]
    },
    {
      "name": "功能类-自动签到",
      "desc": "点击[签到]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "Button[text=\"签到\"]",
          "activityIds": ".activity.frame.MainFrameActivity",
          "snapshotUrls": "https://i.gkd.li/i/16897712",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-阅读中-加入书架",
      "desc": "点击 X",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id=\"com.kuangxiangciweimao.novel:id/closeImg\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-阅读-活动弹窗",
      "desc": "点击 X",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"com.kuangxiangciweimao.novel:id/imgclose\"] - [vid=\"img_activity\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "desc": "点击 我知道了",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"我知道了\"]",
            "[id=\"com.kuangxiangciweimao.novel:id/nav_btn\"]"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-绑定账号",
      "desc": "点击【以后】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": [
            "@[text=\"绑定账号\"]",
            "@[text=\"以后\"] + [text=\"去绑定\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/17789233",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-签到",
      "desc": "点击【签到】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionDelay": 1000,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.kuangxiangciweimao.novel:id/signBtn\"][text=\"签到\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17554248"
        },
        {
          "matches": "[id=\"com.kuangxiangciweimao.novel:id/signBtn\"][text=\"每周福利\"]",
          "action": "clickCenter",
          "actionDelay": 300,
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/i/17686396",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-APP自动点击退出",
      "desc": "点击【确定】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionDelay": 100,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": [
            "[id=\"com.kuangxiangciweimao.novel:id/dia_message\"][text=\"是否退出？\"]",
            "[id=\"com.kuangxiangciweimao.novel:id/pos_btn\"][text=\"确定\"]"
          ],
          "action": "clickCenter",
          "key": 0
        }
      ]
    }
  ]
});

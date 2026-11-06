// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "RayLink",
  "id": "com.example.raylink_flutter",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"立即升级\"] + [desc=\"以后再说\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13659530",
          "key": 0
        },
        {
          "matches": "[desc=\"立即升级\"] + [desc=\"以后再说\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-退出软件时点击\"退出程序\"",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"退出程序\"]",
          "activityIds": "com.remote.cn.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14047538"
        },
        {
          "matches": "@Button[desc=\"退出程序\"] <4 View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.remote.cn.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24852663"
        }
      ]
    },
    {
      "name": "通知提示-首页反诈骗提示",
      "key": 2,
      "rules": [
        {
          "matches": "[desc=\"允许远程本设备\"] +2 View[childCount=1][index=parent.childCount.minus(1)] > ImageView[clickable=true][width<80 && height<80]",
          "activityIds": "com.remote.cn.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/24853050",
            "https://i.gkd.li/i/24995320"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"立即升级\"] + [desc=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动确认[退出]",
      "desc": "退出软件时点击[退出程序]",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"退出程序\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14047538"
        },
        {
          "matches": "@Button[desc=\"退出程序\"] <4 View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24852663"
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "[desc=\"立即升级\"] + [desc=\"以后再说\"]",
          "key": 0
        }
      ]
    }
  ]
});

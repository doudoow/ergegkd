// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "电子邮件",
  "id": "com.android.email",
  "groups": [
    {
      "name": "权限提示-自启动",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text^=\"检测到您的自启动权限未开启\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "activityIds": "com.wps.multiwindow.main.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17276404",
          "exampleUrls": "https://e.gkd.li/1eacdaf8-1405-44d8-a9b9-228e913c5180",
          "key": 0
        },
        {
          "matches": [
            "[text*=\"自启动权限未开启\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "activityIds": "com.wps.multiwindow.main.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17276404",
          "exampleUrls": "https://e.gkd.li/1eacdaf8-1405-44d8-a9b9-228e913c5180",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动切换到[合并账户]",
      "desc": "仅在收件箱界面开屏时触发",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[!(text=\"合并账户\" || text=\"合并帐户\")] <2 [vid=\"titleContainer\"][clickable=true]",
          "actionMaximum": 1,
          "matchTime": 5000,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25607057",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28678424"
        },
        {
          "matches": "[text=\"合并账户\" || text=\"合并帐户\"][checkable=true]",
          "actionDelay": 200,
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/25607113",
            "https://i.gkd.li/i/28678374"
          ]
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "点击[暂不评价]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"暂不评价\"][clickable=true]",
          "activityIds": "com.wps.multiwindow.main.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28678584",
          "key": 0
        }
      ]
    }
  ]
});

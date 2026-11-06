// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "115生活",
  "id": "com.ylmf.androidclient",
  "groups": [
    {
      "name": "功能类-自动签到",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"签到\"]",
          "key": 0,
          "name": "点击[签到]-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738911",
            "https://i.gkd.li/i/14738906"
          ]
        },
        {
          "matches": "[vid=\"iv_sign_in_btn\"]",
          "preKeys": [
            4
          ],
          "key": 1,
          "name": "点击[签到]-2",
          "snapshotUrls": "https://i.gkd.li/i/15510753"
        },
        {
          "matches": "[text=\"我知道了\"]",
          "preKeys": [
            4,
            1
          ],
          "key": 2,
          "name": "点击[我知道了]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738909",
            "https://i.gkd.li/i/15510873"
          ]
        },
        {
          "matches": "[text=\"签到规则\"]",
          "action": "back",
          "preKeys": [
            5
          ],
          "key": 3,
          "name": "返回",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738907",
            "https://i.gkd.li/i/15509322"
          ]
        },
        {
          "matches": "@[clickable=true] >2 [text=\"签到\"]",
          "activityIds": "com.ylmf.androidclient.UI.MainBossActivity",
          "key": 4,
          "name": "点击[签到]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738911",
            "https://i.gkd.li/i/14738906"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/09c2ac32-9364-4a1f-9f49-c05c5695d5a0"
        },
        {
          "matches": "[text=\"我知道了\"]",
          "preKeys": [
            4
          ],
          "activityIds": "com.main.world.equity.activity.SignInActivity",
          "key": 5,
          "name": "点击[我知道了]",
          "snapshotUrls": "https://i.gkd.li/i/14738909",
          "exampleUrls": "https://m.gkd.li/57941037/fd597dc2-b926-44fa-acaf-ec7cfa41813a"
        },
        {
          "matches": "[text=\"签到规则\"]",
          "action": "back",
          "preKeys": [
            5
          ],
          "activityIds": "com.main.world.equity.activity.SignInActivity",
          "key": 6,
          "name": "返回",
          "snapshotUrls": "https://i.gkd.li/i/14738907",
          "exampleUrls": "https://m.gkd.li/57941037/9d445e18-91dc-4e6c-a765-3a1593230d7b"
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击[返回]关闭页面",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"转到上一层级\"] + [text=\"更新版本\"]",
          "activityIds": "com.ylmf.androidclient.UI.UpdateVersionActivity",
          "snapshotUrls": "https://i.gkd.li/i/14738944",
          "exampleUrls": "https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d",
          "key": 0
        },
        {
          "matches": "@[desc=\"转到上一层级\"] + [text=\"更新版本\"]",
          "activityIds": ".UI.UpdateVersionActivity",
          "snapshotUrls": "https://i.gkd.li/i/14738944",
          "exampleUrls": "https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d",
          "key": 1
        }
      ]
    }
  ]
});

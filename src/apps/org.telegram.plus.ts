// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Telegram+ (Plus Messenger)",
  "id": "org.telegram.plus",
  "groups": [
    {
      "name": "功能类-更多-保存到相册",
      "desc": "右上角菜单-点击[保存到相册]",
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true][left>350] > [text=\"保存到相册\"]",
          "activityIds": "org.telegram.ui.LaunchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24337783",
          "excludeSnapshotUrls": "https://i.gkd.li/i/24450853",
          "exampleUrls": "https://e.gkd.li/d09a281b-5652-4072-ae19-42d944f01d95",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-更多-只保存单个媒体",
      "desc": "弹窗-点击 [这张图片]或[这个媒体]",
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"保存\" || text^=\"Save\"] < * +2 * > [text^=\"这\" || text^=\"This\"][clickable=true]",
          "activityIds": "org.telegram.ui.LaunchActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22945715",
            "https://i.gkd.li/i/22945853",
            "https://i.gkd.li/i/25730622",
            "https://i.gkd.li/i/25742054"
          ],
          "exampleUrls": "https://e.gkd.li/9225eb21-84e6-4baa-88c5-f5dc2230c111",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通讯录权限",
      "desc": "点击[稍后]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text*=\"通讯录\"]",
            "[text=\"稍后\"][clickable=true]"
          ],
          "activityIds": "org.telegram.ui.LaunchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25730831",
          "exampleUrls": "https://e.gkd.li/d0f31779-9ed8-47a1-9324-c898e9add118",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-安装未知应用",
      "desc": "不允许, 点击[稍后]",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text^=\"此应用已被限制安装 APK\"]",
            "[text=\"稍后\"][clickable=true]"
          ],
          "activityIds": "org.telegram.ui.LaunchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26217948",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Telegram",
  "id": "org.telegram.messenger.web",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"更新 Telegram\"]",
            "@View[clickable=true] + [text=\"请稍后提醒我\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13847837",
          "key": 0
        },
        {
          "matches": [
            "[text=\"更新 Telegram\"]",
            "[text=\"请稍后提醒我\"] - View"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "通知提示-同意消息通知",
      "desc": "点击【继续】",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"打开通知\"] +n [text=\"继续\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-添加生日提示",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - * >2 [text^=\"添加您的生日\" || text^=\"Add your birthday\"]",
          "activityIds": "org.telegram.ui.LaunchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26601844",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通讯录权限",
      "desc": "点击稍后",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"Not now\" || text^=\"稍后\"] < [childCount=2] - ScrollView >2 [text*=\"contacts\" || text*=\"联系人\"][text.length>20]",
          "activityIds": "org.telegram.ui.LaunchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28680747",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-更多-保存到相册",
      "desc": "右上角菜单-点击[保存到相册]",
      "key": 4,
      "rules": [
        {
          "matches": "@[clickable=true][left>350] > [text=\"保存到相册\" || text=\"儲存到相簿\" || text=\"Save to Gallery\"]",
          "activityIds": "org.telegram.ui.LaunchActivity",
          "fastQuery": true,
          "exampleUrls": "https://e.gkd.li/f164341a-32fa-4054-9ae1-85d5e686bd64",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-只保存单个媒体",
      "desc": "弹窗-点击 [这张图片]或[该媒体]",
      "key": 5,
      "rules": [
        {
          "matches": "[text^=\"保存\" || text^=\"儲存\" || text^=\"Save\"] < * +2 * > [text^=\"这\" || text^=\"這\" || text^=\"This\" || text^=\"该\"][clickable=true]",
          "activityIds": "org.telegram.ui.LaunchActivity",
          "fastQuery": true,
          "exampleUrls": "https://e.gkd.li/322731e7-f595-4775-9986-a9cff001e861",
          "key": 0
        }
      ]
    }
  ]
});

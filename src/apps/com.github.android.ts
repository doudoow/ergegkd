// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "GitHub",
  "id": "com.github.android",
  "groups": [
    {
      "name": "功能类-自动批准授权验证",
      "desc": "输入2位数字后-> 批准-> 关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"@\"] + EditText[text.length=2][visibleToUser=true] +2 @View[clickable=true] > [text=\"批准\"]",
          "matchRoot": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/28906388",
          "exampleUrls": "https://e.gkd.li/86a9d677-6f59-4a3a-81d0-8bb0d6847ca9"
        },
        {
          "matches": "[text=\"登录已批准\" || text=\"无法批准\" || text=\"未找到登录请求\"] +n @[clickable=true] > [text=\"关闭\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/25366553",
            "https://i.gkd.li/i/25366549",
            "https://i.gkd.li/i/32758660"
          ],
          "exampleUrls": [
            "https://e.gkd.li/e18eed95-993a-4148-b486-27e64e709188",
            "https://e.gkd.li/c165be1d-f0d4-47d0-8a39-3aac562885b1",
            "https://e.gkd.li/4bb620ca-a35a-40c1-ad80-8c777bf86d02"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-PR自动展开详情",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"更改\"] < * < ComposeView - [childCount=2] >2 [text=\"阅读更多\"][clickable=true]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26644420",
          "exampleUrls": "https://e.gkd.li/1a5c6e13-1a77-400e-9e78-e164563824db",
          "key": 0
        }
      ]
    }
  ]
});

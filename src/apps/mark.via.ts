// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Via",
  "id": "mark.via",
  "groups": [
    {
      "name": "功能类-自动[确认]下载",
      "desc": "自动点击下载弹窗中的[确定]按钮",
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"确定\" || text=\"確定\" || text=\"OK\"] -n [text*=\"下载\" || text*=\"下載\" || text*=\"download\"][visibleToUser=true]",
          "activityIds": ".Shell",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/30865110",
            "https://i.gkd.li/i/30867153",
            "https://i.gkd.li/i/30867205",
            "https://i.gkd.li/i/30867206"
          ],
          "exampleUrls": "https://e.gkd.li/2f2ef3bf-019d-4936-bbd8-51ba4cbe698c",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-长按图片后自动[下载]",
      "desc": "(⚠️仅限图片) ①点击[下载图片] ②点击[确定]下载",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"下载图片\"][clickable=true]",
          "key": 0,
          "name": "①点击[下载图片]",
          "snapshotUrls": "https://i.gkd.li/i/34058087",
          "exampleUrls": "https://e.gkd.li/516e8728-aee9-4474-a043-e64bb6db01e1"
        },
        {
          "matches": "[text$=\".png\" || text$=\".jpg\" || text$=\".jpeg\" || text$=\".webp\" || text$=\".gif\"] < HorizontalScrollView +n [text=\"确定\" || text=\"確定\" || text=\"OK\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "②点击[确定]",
          "snapshotUrls": [
            "https://i.gkd.li/i/34058090",
            "https://i.gkd.li/i/34058098",
            "https://i.gkd.li/i/34058099",
            "https://i.gkd.li/i/34058093"
          ],
          "exampleUrls": "https://e.gkd.li/d918758e-9877-482c-92c5-36036778a575"
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Jump",
  "id": "com.vgjump.jump",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"开启推送通知\"][visibleToUser=true]",
            "[vid=\"ivClose\" || vid=\"tvClose\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".ui.my.favorite.FavoriteActivity",
            ".ui.game.detail.GameDetailActivity",
            ".ui.content.msg.MsgIndexActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17828834",
            "https://i.gkd.li/i/17949205",
            "https://i.gkd.li/i/18022146"
          ],
          "exampleUrls": "https://e.gkd.li/ce574950-4233-477e-b0cc-a4b0d18df249",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告/卡片广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ivSDKClose\"][visibleToUser=true]",
          "activityIds": [
            ".ui.game.detail.GameDetailActivity",
            ".ui.content.detail.ContentDetailActivity",
            ".ui.main.MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17949888",
            "https://i.gkd.li/i/17949885",
            "https://i.gkd.li/i/18004837"
          ],
          "exampleUrls": [
            "https://e.gkd.li/388a915b-5b91-4a4a-8bd3-330b346b2864",
            "https://e.gkd.li/d68c487b-ce63-4d9f-afc3-cc94b3490a33"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"跳过\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14790888"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14446438"
        }
      ]
    }
  ]
});

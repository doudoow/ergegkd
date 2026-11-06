// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "上海公交",
  "id": "com.sh.gj",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[visibleToUser=true] - FrameLayout[childCount=1] > @ImageView[visibleToUser=true] <<n [vid=\"bannerContainer\"]",
          "activityIds": [
            "com.sh.gj.MainActivity",
            "com.sh.gj.activity.LineDetailActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14883102",
            "https://i.gkd.li/i/14883152"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/36771be2-e3fd-498c-9adb-458e9f487b9b"
        },
        {
          "matches": "ImageView[visibleToUser=true] - FrameLayout[childCount=1] > @ImageView[visibleToUser=true] <<n [vid=\"bannerContainer\"]",
          "activityIds": [
            ".MainActivity",
            ".activity.LineDetailActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14883102",
            "https://i.gkd.li/i/14883152"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/36771be2-e3fd-498c-9adb-458e9f487b9b"
        }
      ]
    },
    {
      "name": "功能类-退出软件时的确认弹窗",
      "desc": "点击[确认退出]",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"确认退出\"]",
          "activityIds": "com.sh.gj.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14883160",
          "exampleUrls": "https://m.gkd.li/57941037/38c20d82-947e-4e46-aba8-80e1a773552b",
          "key": 0
        },
        {
          "matches": "[text=\"确认退出\"]",
          "key": 1
        },
        {
          "matches": "[text=\"确认退出\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14883160",
          "exampleUrls": "https://m.gkd.li/57941037/38c20d82-947e-4e46-aba8-80e1a773552b",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView < @FrameLayout <<n [vid=\"bannerContainer\"]",
          "activityIds": [
            "com.sh.gj.MainActivity",
            "com.sh.gj.activity.LineDetailActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/14883107",
            "https://i.gkd.li/i/14883157"
          ]
        }
      ]
    }
  ]
});

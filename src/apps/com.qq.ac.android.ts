// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "腾讯动漫",
  "id": "com.qq.ac.android",
  "groups": [
    {
      "name": "局部广告-漫画阅读页面-左侧悬浮广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.qq.ac.android:id/operation_ad_view\"] > [id=\"com.qq.ac.android:id/btn_close\"]",
          "activityIds": "com.qq.ac.android.reader.comic.ComicReaderActivity",
          "snapshotUrls": "https://i.gkd.li/i/12707756",
          "key": 0
        },
        {
          "matches": "[id=\"com.qq.ac.android:id/operation_ad_view\"] > [id=\"com.qq.ac.android:id/btn_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"operation_ad_view\"] > [vid=\"btn_close\"]",
          "activityIds": ".reader.comic.ComicReaderActivity",
          "snapshotUrls": "https://i.gkd.li/i/12707756",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_del\"]",
          "activityIds": "com.qq.ac.android.reader.comic.ComicReaderActivity",
          "fastQuery": true,
          "key": 0,
          "name": "漫画章节之间的广告",
          "snapshotUrls": "https://i.gkd.li/i/14730335",
          "exampleUrls": "https://m.gkd.li/57941037/1be7564d-f6c2-429d-9cb0-3d923adafc8a"
        },
        {
          "matches": "[vid=\"iv_del\"]",
          "activityIds": ".reader.comic.ComicReaderActivity",
          "fastQuery": true,
          "key": 1,
          "name": "漫画章节之间的广告",
          "snapshotUrls": "https://i.gkd.li/i/14730335",
          "exampleUrls": "https://m.gkd.li/57941037/1be7564d-f6c2-429d-9cb0-3d923adafc8a"
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"青少年守护模式\"] - [id=\"com.qq.ac.android:id/close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"青少年守护模式\"] - [id=\"com.qq.ac.android:id/close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "漫画阅读页面-左侧悬浮广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.qq.ac.android:id/operation_ad_view\"] > [id=\"com.qq.ac.android:id/btn_close\"]",
          "key": 0
        }
      ]
    }
  ]
});

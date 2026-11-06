// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "YouTube Music",
  "id": "com.google.android.apps.youtube.music",
  "groups": [
    {
      "name": "局部广告-播放界面广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.google.android.apps.youtube.music:id/skip_ad_button\"]",
          "activityIds": "com.google.android.apps.youtube.music.activities.MusicActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13196056",
          "key": 0
        },
        {
          "matches": "[vid=\"skip_ad_button\"]",
          "activityIds": ".activities.MusicActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13196056",
          "key": 1
        },
        {
          "matches": "[id=\"com.google.android.apps.youtube.music:id/skip_ad_text\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-会员广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"Close\" || desc=\"No thanks\"][visibleToUser=true] <<n [vid=\"custom\"]",
          "activityIds": ".activities.MusicActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/18542111",
            "https://i.gkd.li/i/18727504"
          ],
          "exampleUrls": "https://e.gkd.li/42b2cb6d-b1e2-4cb1-84d8-399939263711"
        },
        {
          "matches": "[text=\"No thanks\"][visibleToUser=true]",
          "activityIds": ".activities.MusicActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/19442247",
          "exampleUrls": "https://e.gkd.li/eb519d7d-8d6c-4196-bf23-ea8c0511cfa9"
        }
      ]
    },
    {
      "name": "通知提示-隐私提醒",
      "desc": "点击[OK]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"Privacy check-up\"][visibleToUser=true]",
            "[text=\"Ok\"][visibleToUser=true]"
          ],
          "activityIds": ".activities.MusicActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18546896",
          "exampleUrls": "https://e.gkd.li/bffc2f66-8538-4970-9b7b-9da2e4a397ab",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-播放界面广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.google.android.apps.youtube.music:id/skip_ad_text\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "播放界面广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.google.android.apps.youtube.music:id/skip_ad_text\"]",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "TwiTake",
  "id": "downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver",
  "groups": [
    {
      "name": "评价提示-评分弹窗",
      "desc": "点击 LATER ",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"Love it\"][visibleToUser=true]",
            "[text=\"LATER\"][visibleToUser=true]"
          ],
          "activityIds": "downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver",
          "snapshotUrls": "https://i.gkd.li/i/13748858",
          "key": 0
        },
        {
          "matches": [
            "[text=\"Love it\"][visibleToUser=true]",
            "[text=\"LATER\"][visibleToUser=true]"
          ],
          "activityIds": "",
          "snapshotUrls": "https://i.gkd.li/i/13748858",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-评分弹窗",
      "desc": "自动点击 LATER 。",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel\"]",
          "activityIds": "downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13748858",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-评分弹窗",
      "desc": "自动点击 LATER 。",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel\"]",
          "activityIds": "downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13748858",
          "key": 0
        }
      ]
    },
    {
      "name": "评分弹窗",
      "desc": "自动点击 LATER 。",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel\"]",
          "activityIds": "downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13748858",
          "key": 0
        }
      ]
    }
  ]
});

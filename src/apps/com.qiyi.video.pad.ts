// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱奇艺PAD",
  "id": "com.qiyi.video.pad",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23381997",
            "https://i.gkd.li/i/23382047"
          ],
          "exampleUrls": [
            "https://e.gkd.li/e731c9e7-b93e-4d3f-ae6c-887554b27d5a",
            "https://e.gkd.li/7a74687a-f576-4820-9ef8-3e10ddb67562"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-暂停播放后出现的广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"关闭广告\"][visibleToUser=true]",
          "activityIds": "org.iqiyi.video.activity.PlayerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23837894",
          "exampleUrls": "https://e.gkd.li/471a67f0-5926-4caa-a070-2b4635b5052a",
          "key": 0
        }
      ]
    }
  ]
});

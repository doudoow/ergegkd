// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "星芽免费短剧",
  "id": "com.jz.xydj",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"][clickable=true]",
          "activityIds": "com.jz.jzdj.ui.activity.shortvideo.ShortVideoActivity2",
          "fastQuery": true,
          "key": 0,
          "name": "底部卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/14391204",
          "exampleUrls": "https://m.gkd.li/57941037/c6e1dfa9-388e-417f-9ab2-d3ea63d3eb8a"
        }
      ]
    },
    {
      "name": "局部广告-视频观看页下方广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"]",
          "activityIds": "com.jz.jzdj.ui.activity.shortvideo.ShortVideoActivity2",
          "fastQuery": true,
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/i/14391606"
        }
      ]
    }
  ]
});

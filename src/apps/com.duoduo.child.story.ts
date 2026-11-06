// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "儿歌多多",
  "id": "com.duoduo.child.story",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close_banner\"]",
          "activityIds": "com.duoduo.child.story.ui.activity.PlayActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15531352",
          "exampleUrls": "https://m.gkd.li/57941037/0a4febc1-9a34-41cb-bbca-63c6723fa228",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close_banner\"]",
          "activityIds": ".ui.activity.PlayActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15531352",
          "exampleUrls": "https://m.gkd.li/57941037/0a4febc1-9a34-41cb-bbca-63c6723fa228",
          "key": 1
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "美柚",
  "id": "com.lingan.seeyou",
  "groups": [
    {
      "name": "局部广告-评论区上方卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.lingan.seeyou:id/v_close\"]",
          "activityIds": "com.lingan.seeyou.ui.activity.community.topicdetail.TopicDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14034770",
          "key": 0
        },
        {
          "matches": "[vid=\"v_close\"]",
          "activityIds": ".ui.activity.community.topicdetail.TopicDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14034770",
          "key": 1
        }
      ]
    }
  ]
});

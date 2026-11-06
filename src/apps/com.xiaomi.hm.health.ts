// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Zepp Life",
  "id": "com.xiaomi.hm.health",
  "groups": [
    {
      "name": "局部广告-首页-底部广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[id=\"com.xiaomi.hm.health:id/close_icon\"]",
          "activityIds": "com.xiaomi.hm.health.activity.ChannelMainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13695424",
          "key": 0
        },
        {
          "matches": "ImageView[vid=\"close_icon\"]",
          "activityIds": ".activity.ChannelMainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13695424",
          "key": 1
        },
        {
          "matches": "ImageView[id=\"com.xiaomi.hm.health:id/close_icon\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-首页-底部广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[id=\"com.xiaomi.hm.health:id/close_icon\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-底部广告",
      "enable": false,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id=\"com.xiaomi.hm.health:id/close_icon\"]",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "懒人听书",
  "id": "bubei.tingshu",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"bubei.tingshu:id/closeIcon\"][desc=\"关闭\"]",
          "activityIds": "bubei.tingshu.listen.book.detail.activity.DetailActivity",
          "fastQuery": true,
          "key": 0,
          "name": "播放列表-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13348489"
        },
        {
          "matches": "[vid=\"closeIcon\"][desc=\"关闭\"]",
          "activityIds": ".listen.book.detail.activity.DetailActivity",
          "fastQuery": true,
          "key": 1,
          "name": "播放列表-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13348489"
        },
        {
          "matches": "@ImageView[id=\"bubei.tingshu:id/closeIcon\"] - RelativeLayout[id=\"bubei.tingshu:id/rootView\"] > ImageView[id=\"bubei.tingshu:id/adIcon\"]",
          "activityIds": ".listen.book.detail.activity.DetailActivity",
          "fastQuery": true,
          "key": 2,
          "name": "播放列表-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13348489"
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"暂不升级\"]",
          "activityIds": ".home.ui.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13545953",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-悬浮广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"bubei.tingshu:id/closeIcon\"][desc=\"关闭\"]",
          "activityIds": "bubei.tingshu.listen.book.detail.activity.DetailActivity",
          "fastQuery": true,
          "key": 0,
          "name": "播放列表-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13348489"
        }
      ]
    },
    {
      "name": "悬浮广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"bubei.tingshu:id/closeIcon\"][desc=\"关闭\"]",
          "activityIds": "bubei.tingshu.listen.book.detail.activity.DetailActivity",
          "quickFind": true,
          "key": 0,
          "name": "播放列表-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13348489"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"发现新版本\"] +2 * > [text=\"暂不升级\"]",
          "key": 0
        }
      ]
    }
  ]
});

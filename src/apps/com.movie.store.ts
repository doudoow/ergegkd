// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "影视仓",
  "id": "com.movie.store",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"广告\"] +2 View > View + TextView",
          "activityIds": "com.github.tvbox.osc.ui.activity.mobile.MobileHomeActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13476107"
        },
        {
          "matches": "[desc$=\"dislike\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.github.tvbox.osc.ui.activity.mobile.MobileHomeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14396706",
          "exampleUrls": "https://m.gkd.li/57941037/df960a4d-764d-4a9e-bb1e-f0ab325e4cb0"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"广告\"] +2 View > View + TextView",
          "activityIds": "com.github.tvbox.osc.ui.activity.mobile.MobileHomeActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13476107"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"广告\"] +2 View > View + TextView",
          "activityIds": "com.github.tvbox.osc.ui.activity.mobile.MobileHomeActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13476107"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"广告\"] +2 View > View + TextView",
          "activityIds": "com.github.tvbox.osc.ui.activity.mobile.MobileHomeActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13476107"
        }
      ]
    }
  ]
});

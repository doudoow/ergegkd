// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米游戏中心",
  "id": "com.xiaomi.gamecenter",
  "groups": [
    {
      "name": "局部广告-首页右侧悬浮广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.gamecenter:id/ad_view\"] + [id=\"com.xiaomi.gamecenter:id/close_btn\"]",
          "activityIds": "com.xiaomi.gamecenter.ui.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715800",
          "key": 0
        },
        {
          "matches": "[vid=\"ad_view\"] + [vid=\"close_btn\"]",
          "activityIds": ".ui.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715800",
          "key": 1
        },
        {
          "matches": "[id=\"com.xiaomi.gamecenter:id/ad_view\"] + [id=\"com.xiaomi.gamecenter:id/close_btn\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-首页右侧悬浮广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.gamecenter:id/ad_view\"] + [id=\"com.xiaomi.gamecenter:id/close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页右侧悬浮广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.gamecenter:id/ad_view\"] + [id=\"com.xiaomi.gamecenter:id/close_btn\"]",
          "key": 0
        }
      ]
    }
  ]
});

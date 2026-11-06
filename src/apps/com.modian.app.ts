// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "摩点",
  "id": "com.modian.app",
  "groups": [
    {
      "name": "局部广告-[我的]界面广告条",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.modian.app:id/fl_banner_layout\"] > [id=\"com.modian.app:id/iv_close\"]",
          "activityIds": "com.modian.app.ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13610188",
          "key": 0
        },
        {
          "matches": "[vid=\"fl_banner_layout\"] > [vid=\"iv_close\"]",
          "activityIds": ".ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13610188",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-「我的」界面广告条",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.modian.app:id/banner_view\"] + [id=\"com.modian.app:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13610188",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-「我的」界面广告条",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.modian.app:id/banner_view\"] + [id=\"com.modian.app:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13610188",
          "key": 0
        }
      ]
    },
    {
      "name": "「我的」界面广告条",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.modian.app:id/banner_view\"] + [id=\"com.modian.app:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13610188",
          "key": 0
        }
      ]
    }
  ]
});

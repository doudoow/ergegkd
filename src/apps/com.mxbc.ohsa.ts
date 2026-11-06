// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "蜜雪冰城鸿蒙版",
  "id": "com.mxbc.ohsa",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@UIComponent[id=\"Id_close\"] <2 UIComponentContainer < UIComponentContainer < UIComponentContainer < [id=\"android:id/content\"]",
          "activityIds": "com.mxbc.ohsa.modules.main.MainAbilityShellActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13728113",
          "key": 0
        },
        {
          "matches": "@UIComponent[id=\"Id_close\"] <2 UIComponentContainer < UIComponentContainer < UIComponentContainer < [id=\"android:id/content\"]",
          "activityIds": ".modules.main.MainAbilityShellActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13728113",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "UIComponentContainer > [id=\"Id_close\"]",
          "activityIds": "com.mxbc.ohsa.modules.main.MainAbilityShellActivity",
          "snapshotUrls": "https://i.gkd.li/i/13728113",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "UIComponentContainer > [id=\"Id_close\"]",
          "activityIds": "com.mxbc.ohsa.modules.main.MainAbilityShellActivity",
          "snapshotUrls": "https://i.gkd.li/import/13728113",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "UIComponentContainer > [id=\"Id_close\"]",
          "activityIds": "com.mxbc.ohsa.modules.main.MainAbilityShellActivity",
          "snapshotUrls": "https://i.gkd.li/import/13728113",
          "key": 0
        }
      ]
    }
  ]
});
